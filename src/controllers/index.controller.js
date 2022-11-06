import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

export const createImage = async (req, res) => {
    try {
        const { promtImage } = req.body;

        const response = await openai.createImage({
            prompt: promtImage,
            n: 1,
            size: "1024x1024",
        });
    
        console.log(response.data);
    
        res.json(response.data);
    } catch (error) {
        res.json({error: error});
    }
}