import fs from 'fs';
import axios from 'axios';
import path from 'path';
import readline from 'readline';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY}); // Use OPENAI_API_KEY environment variable

async function downloadLogo(url, outputPath) {
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });

        const writer = fs.createWriteStream(outputPath);

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Error downloading ${url}: ${error}`);
    }
}

async function getLogoUrl(technology) {
    const prompt = `Find the URL for the ${technology} logo in SVG or PNG format.`;
    const response = await openai.completions.create({
        model: 'text-davinci-002',
        prompt,
        max_tokens: 60
    });

    // Extract the URL from the response
    const url = response.choices[0].text.trim();

    return url;
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the technology: ', async (technology) => {
        const url = await getLogoUrl(technology);
        console.log(`URL: ${url}`);

        const outputPath = path.join(process.cwd(), 'download', `${technology}.svg`);
        await downloadLogo(url, outputPath);

        rl.close();
    });
}

main();
