// Simple TF-IDF and Cosine Similarity implementation for chatbot

export class ChatbotEngine {
  constructor() {
    this.knowledgeBase = [];
    this.vocabulary = new Set();
    this.idfScores = {};
  }

  // Load knowledge base from CSV
  async loadKnowledgeBase() {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/knowledge_base.csv`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const csvText = await response.text();
      this.parseCSV(csvText);
      this.buildVocabulary();
      this.calculateIDF();
      console.log(`Knowledge base loaded successfully with ${this.knowledgeBase.length} entries`);
    } catch (error) {
      console.error('Failed to load knowledge base:', error);
      // Initialize with minimal fallback data
      this.initializeFallbackData();
    }
  }

  // Initialize with fallback data if CSV loading fails
  initializeFallbackData() {
    this.knowledgeBase = [
      {
        category: 'general',
        question: 'What do you do?',
        keywords: 'role profession job work',
        answer: "I'm Jashwanth SA, a web developer and UI/UX designer currently pursuing B.E in Computer Science at Chennai Institute of Technology.",
        details: 'Student and developer with practical experience'
      },
      {
        category: 'skills',
        question: 'What are your skills?',
        keywords: 'skills technologies programming languages',
        answer: 'I work with React, Node.js, Python, Java, and have experience in machine learning and competitive programming.',
        details: 'Full-stack development with modern technologies'
      }
    ];
    this.buildVocabulary();
    this.calculateIDF();
    console.log('Fallback knowledge base initialized');
  }

  // Parse CSV data
  parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = this.parseCSVLine(lines[i]);
        if (values.length >= 5) {
          this.knowledgeBase.push({
            category: values[0],
            question: values[1],
            keywords: values[2],
            answer: values[3],
            details: values[4]
          });
        }
      }
    }
  }

  // Parse CSV line handling quoted values
  parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    result.push(current.trim());
    return result;
  }

  // Build vocabulary from all keywords and questions
  buildVocabulary() {
    this.knowledgeBase.forEach(item => {
      const text = `${item.keywords} ${item.question}`.toLowerCase();
      const words = this.tokenize(text);
      words.forEach(word => this.vocabulary.add(word));
    });
  }

  // Calculate IDF scores
  calculateIDF() {
    const totalDocs = this.knowledgeBase.length;
    
    this.vocabulary.forEach(word => {
      const docsWithWord = this.knowledgeBase.filter(item => {
        const text = `${item.keywords} ${item.question}`.toLowerCase();
        return this.tokenize(text).includes(word);
      }).length;
      
      this.idfScores[word] = Math.log(totalDocs / (docsWithWord + 1));
    });
  }

  // Tokenize text
  tokenize(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 1);
  }

  // Calculate TF-IDF vector
  calculateTFIDF(text) {
    const words = this.tokenize(text);
    const tf = {};
    const vector = {};
    
    // Calculate term frequency
    words.forEach(word => {
      tf[word] = (tf[word] || 0) + 1;
    });
    
    // Calculate TF-IDF
    this.vocabulary.forEach(word => {
      const termFreq = tf[word] || 0;
      const idf = this.idfScores[word] || 0;
      vector[word] = termFreq * idf;
    });
    
    return vector;
  }

  // Calculate cosine similarity
  cosineSimilarity(vec1, vec2) {
    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;
    
    this.vocabulary.forEach(word => {
      const val1 = vec1[word] || 0;
      const val2 = vec2[word] || 0;
      
      dotProduct += val1 * val2;
      norm1 += val1 * val1;
      norm2 += val2 * val2;
    });
    
    if (norm1 === 0 || norm2 === 0) return 0;
    return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
  }

  // Find best matching response
  findBestMatch(userQuery) {
    if (this.knowledgeBase.length === 0) {
      return {
        answer: "I'm still learning about Jashwanth. Please try asking about his skills, projects, or experience!",
        confidence: 0
      };
    }

    const queryVector = this.calculateTFIDF(userQuery);
    let bestMatch = null;
    let bestScore = 0;

    this.knowledgeBase.forEach(item => {
      const itemText = `${item.keywords} ${item.question}`;
      const itemVector = this.calculateTFIDF(itemText);
      const similarity = this.cosineSimilarity(queryVector, itemVector);
      
      if (similarity > bestScore) {
        bestScore = similarity;
        bestMatch = item;
      }
    });

    // If no good match found, provide fallback
    if (bestScore < 0.1) {
      return {
        answer: "I'm not sure about that. You can ask me about Jashwanth's skills, projects, experience, education, or achievements!",
        confidence: 0,
        suggestions: ["What projects has he built?", "What are his skills?", "Tell me about his experience"]
      };
    }

    return {
      answer: bestMatch.answer,
      details: bestMatch.details,
      category: bestMatch.category,
      confidence: bestScore,
      suggestions: this.getSuggestions(bestMatch.category)
    };
  }

  // Get related suggestions
  getSuggestions(category) {
    const categoryQuestions = this.knowledgeBase
      .filter(item => item.category === category)
      .slice(0, 3)
      .map(item => item.question);
    
    return categoryQuestions;
  }

  // Get welcome message
  getWelcomeMessage() {
    return {
      answer: "Hi! I'm JashGPT. I can answer questions about Jashwanth's skills, projects, experience, and more. What would you like to know?",
      suggestions: [
        "What projects has he built?",
        "What are his technical skills?", 
        "Tell me about his experience",
        "What's his educational background?"
      ]
    };
  }
} 