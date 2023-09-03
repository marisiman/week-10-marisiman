const getAllSpices = async (req, res) => {
    try {
      const spices = await req.db.collection('spices').find().toArray()
      
      res.status(200).json({
        message: 'Spices successfully retrieved',
        data: spices
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  
  const createSpices = async (req, res) => {
    const { title, author } = req.body
    
    console.log(title, author, `<=================== spices ==================`);
    
    try {
      const newSpice = await req.db.collection('spices').insertOne({ title, author })
      
      res.status(200).json({
        message: 'Spices successfully created',
        data: newSpice
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  
  module.exports = {
    getAllSpices,
    createSpices
  }