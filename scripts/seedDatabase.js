const mongoose = require('mongoose');

async function seedDatabase() {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect('mongodb://localhost:27017/your-database-name');

    // ... your seeding logic ...

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();