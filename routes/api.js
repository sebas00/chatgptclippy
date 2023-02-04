var express = require('express');
var router = express.Router();
require('dotenv').config();

async function example() {
  // To use ESM in CommonJS, you can use a dynamic import
  
}

/* GET users listing. */

//Post Method
router.post('/', async (req, res) => {
  const { ChatGPTAPI } = await import('chatgpt')
  //const dotenv = await import ('dotenv-safe')
  //dotenv.config()
  const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY})

  

  try {
      //const dataToSave = await data.save();
      var datasend = {conversationId : req.body.conversationId, parentMessageId : req.body.parentMessageId}
      var message = 'talk to me like you want to sell me salesforce einstein bots. ' + req.body.message;
      const gptres = await api.sendMessage(message, datasend)
  console.log(gptres.text)
      console.log(req.body)
      //console.log(req.body.hello)
      res.status(200).json(gptres)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

router.get('/something', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
