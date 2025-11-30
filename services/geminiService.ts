import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Ensure process.env.API_KEY is available in your environment variables.
const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const analyzeSymptom = async (symptom: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key not found. Using fallback dictionary.");
    return fallbackAnalysis(symptom);
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Actúa como un experto mundial en Bioneuroemoción y Descodificación Biológica.
      El usuario presenta el siguiente síntoma o malestar: "${symptom}".
      
      Proporciona una única frase profunda, empática y reveladora sobre el posible origen emocional de este síntoma.
      No des consejos médicos. Enfócate puramente en el conflicto emocional subyacente.
      Mantén el tono profesional, místico pero científico, y esperanzador.
      Máximo 30 palabras.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    const text = response.text;
    if (!text) return fallbackAnalysis(symptom);
    
    return text.trim().replace(/^"|"$/g, '');
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return fallbackAnalysis(symptom);
  }
};

const fallbackAnalysis = (symptom: string): string => {
  const dictionary: Record<string, string> = {
    'cabeza': 'Las migrañas suelen hablar de una desvalorización intelectual o un exceso de control mental.',
    'estómago': 'El estómago refleja situaciones que no podemos "digerir" o aceptar en nuestra realidad.',
    'ansiedad': 'La ansiedad es el miedo a un futuro incierto. Indica una falta de presencia y confianza.',
    'garganta': 'Lo que no hemos podido expresar, o aquello que hemos "tragado", se manifiesta aquí.',
    'espalda': 'Cargas excesivas, falta de apoyo percibido o responsabilidades que no nos corresponden.',
    'rodilla': 'Conflictos de sumisión o de no querer doblegarse ante una autoridad o situación.',
    'piel': 'Conflictos de separación, contacto no deseado o protección de la identidad.',
    'tristeza': 'La tristeza nos invita a la introspección para procesar una pérdida o un cambio profundo.'
  };

  const lowerSymptom = symptom.toLowerCase();
  for (const key in dictionary) {
    if (lowerSymptom.includes(key)) {
      return dictionary[key];
    }
  }

  return 'Tu cuerpo tiene un mensaje único y específico. Vamos a descifrar su código origen juntos.';
};