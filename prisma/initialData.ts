import { Spots } from "@prisma/client";
import { NewEmotion, NewMood, NewSymptom } from "protocols";
import utils from "./generic";
import generic from "./generic";

const newMoods: NewMood[] = [
    { name: 'Great', color: '#C7FACB' },
    { name: 'Good', color: '#DDEDB7' },
    { name: 'Meh', color: '#FFEDA5' },
    { name: 'Bad', color: '#FFDDAF' },
    { name: 'Angry', color: '#FFD3CA' },
];

const newSpots: Spots[] = [
    { id: 7, name: 'Crown', color: '#AD61FA' },
    { id: 6, name: 'Front', color: '#527DFF' },
    { id: 5, name: 'Throat', color: '#5CE1E6' },
    { id: 4, name: 'Heart', color: '#7ED957' },
    { id: 3, name: 'Solar Plexus', color: '#FFDE59' },
    { id: 2, name: 'Sacral', color: '#FF914D' },
    { id: 1, name: 'Root', color: '#FF5757' },
];

const newEmotions: NewEmotion[] = [
    { name: 'Admiration', color: '#640d14' },
    { name: 'Worship', color: '#ad2831' },
    { name: 'Relief', color: '#86bbd8' },
    { name: 'Wish', color: '#ffea00' },
    { name: 'Anxiety', color: '#ffc300' },
    { name: 'Aesthetic appreciation', color: '#735d78' },
    { name: 'Ecstasy', color: '#d90368' },
    { name: 'Calmness', color: '#33658a' },
    { name: 'Confusion', color: '#212529' },
    { name: 'Desire', color: '#ff5d8f' },
    { name: 'Empathy', color: '#41ead4' },
    { name: 'Astonishment', color: '#252422' },
    { name: 'Estrangement', color: '#d76a03' },
    { name: 'Excitement', color: '#bc4749' },
    { name: 'Horror', color: '#540d6e' },
    { name: 'Envy', color: '#f9dc5c' },
    { name: 'Interest', color: '#f86624' },
    { name: 'Joy', color: '#6e44ff' },
    { name: 'Fear', color: '#000814' },
    { name: 'Disgust', color: '#8ea604' },
    { name: 'Nostalgy', color: '#ffc482' },
    { name: 'Anger', color: '#c1121f' }, 
    { name: 'Passion', color: '#800e13' }, 
    { name: 'Satisfaction', color: '#38b000' },
    { name: 'Surprise', color: '#3772ff' },
    { name: 'Boredom', color: '#a4a9ad' },
    { name: 'Sadness', color: '#5e6472' },
];

const newPhysicalSymptoms: NewSymptom[] = [
    { name: 'Intestine', spotId: utils.spotId.root },
    { name: 'Kidneys', spotId: utils.spotId.root },
    { name: 'Fatigue', spotId: utils.spotId.root },
    { name: 'Low Back', spotId: utils.spotId.root },
    { name: 'Anemia', spotId: utils.spotId.root },
    { name: 'Blood Pressure', spotId: utils.spotId.root },

    { name: 'Sex Organ', spotId: utils.spotId.sacral },
    { name: 'Menstrual Issues', spotId: utils.spotId.sacral },
    { name: 'Infertility', spotId: utils.spotId.sacral },
    { name: 'Ovary', spotId: utils.spotId.sacral },
    { name: 'Uterus', spotId: utils.spotId.sacral },
    { name: 'Prostate', spotId: utils.spotId.sacral },

    { name: 'Pancreas', spotId: utils.spotId.solarPlexus },
    { name: 'Diabetes', spotId: utils.spotId.solarPlexus },
    { name: 'Stomach', spotId: utils.spotId.solarPlexus },
    { name: 'Liver', spotId: utils.spotId.solarPlexus },
    { name: 'Vesicle', spotId: utils.spotId.solarPlexus },
    { name: 'Spleen', spotId: utils.spotId.solarPlexus },

    { name: 'Heart', spotId: utils.spotId.heart },
    { name: 'Blood Circulation', spotId: utils.spotId.heart },
    { name: 'Low Immunity', spotId: utils.spotId.heart },
    { name: 'Lymphatic diseases', spotId: utils.spotId.heart },
    { name: 'Immune diseases', spotId: utils.spotId.heart },

    { name: 'Voice', spotId: utils.spotId.throat },
    { name: 'Throat', spotId: utils.spotId.throat },
    { name: 'Lungs', spotId: utils.spotId.throat },
    { name: 'Shortness of breath', spotId: utils.spotId.throat },
    { name: 'Thyroid', spotId: utils.spotId.throat },
    { name: 'Cervical', spotId: utils.spotId.throat },
    { name: 'Teeth', spotId: utils.spotId.throat },
    { name: 'Phobias', spotId: utils.spotId.throat },

    { name: 'Left eye', spotId: utils.spotId.front },
    { name: 'Ears', spotId: utils.spotId.front },
    { name: 'Nose', spotId: utils.spotId.front },
    { name: 'Migraine', spotId: utils.spotId.front },
    { name: 'Sinusitis', spotId: utils.spotId.front },
    { name: 'Allergies', spotId: utils.spotId.front },

    { name: 'Insomnia', spotId: utils.spotId.crown },
    { name: 'Tumors', spotId: utils.spotId.crown },
    { name: 'Depression', spotId: utils.spotId.crown },
    { name: 'Right eye', spotId: utils.spotId.crown },
    { name: 'Premature aging', spotId: utils.spotId.crown },  
];

const newEmotionalSymptoms: NewSymptom[] = [
    { name: 'Aggressiveness', spotId: utils.spotId.root },
    { name: 'Violence', spotId: utils.spotId.root },
    { name: 'Self-centeredness', spotId: utils.spotId.root },
    { name: 'Melancholy', spotId: utils.spotId.root },
    { name: 'Strong passions', spotId: utils.spotId.root },
    { name: 'Lack of objectivity', spotId: utils.spotId.root },
    { name: 'Dissatisfaction', spotId: utils.spotId.root },

    { name: 'Insecurity', spotId: utils.spotId.sacral },
    { name: 'Fear', spotId: utils.spotId.sacral },
    { name: 'Sadness', spotId: utils.spotId.sacral },
    { name: 'Anger', spotId: utils.spotId.sacral },
    { name: 'Envy', spotId: utils.spotId.sacral },
    { name: 'Selfishness', spotId: utils.spotId.sacral },
    { name: 'Denial', spotId: utils.spotId.sacral },
    { name: 'Coldness', spotId: utils.spotId.sacral },
    { name: 'Isolation', spotId: utils.spotId.sacral },

    { name: 'Anxiety', spotId: utils.spotId.solarPlexus },
    { name: 'Possessiveness', spotId: utils.spotId.solarPlexus },
    { name: 'Jealousy', spotId: utils.spotId.solarPlexus },
    { name: 'Prejudice', spotId: utils.spotId.solarPlexus },
    { name: 'Wrath', spotId: utils.spotId.solarPlexus },
    { name: 'Attachment', spotId: utils.spotId.solarPlexus },
    { name: 'Pride', spotId: utils.spotId.heart },

    { name: 'Indifference', spotId: utils.spotId.heart },
    { name: 'Low esteem', spotId: utils.spotId.heart },
    { name: 'Inferiority', spotId: utils.spotId.heart },
    { name: 'Radicalism', spotId: utils.spotId.heart },
    { name: 'Guilt', spotId: utils.spotId.heart },
    { name: 'Difficulty relating', spotId: utils.spotId.heart },

    { name: 'Recent memory loss', spotId: utils.spotId.throat },
    { name: 'Lack of presence', spotId: utils.spotId.throat },
    { name: 'Lack of reasoning', spotId: utils.spotId.throat },
    { name: 'Cowardness', spotId: utils.spotId.throat },
    { name: 'Shyness', spotId: utils.spotId.throat },
    { name: 'Blathering', spotId: utils.spotId.throat },
    { name: 'Bad intentions', spotId: utils.spotId.throat },
    { name: 'Intellectual Manipulation', spotId: utils.spotId.throat },
    { name: 'Judgment', spotId: utils.spotId.throat },
    { name: 'Prepotency', spotId: utils.spotId.throat },
    { name: 'Mockness', spotId: utils.spotId.throat },

    { name: 'Rigid Thinking', spotId: utils.spotId.front },
    { name: 'Stubbornness', spotId: utils.spotId.front },
    { name: 'Nightmares', spotId: utils.spotId.front },
    { name: 'Fixation', spotId: utils.spotId.front },
    { name: 'Meanness', spotId: utils.spotId.front },
    { name: 'Lack of faith', spotId: utils.spotId.front },
    { name: 'Arrogance', spotId: utils.spotId.front },
    { name: 'Conscious manipulation', spotId: utils.spotId.front },
    { name: 'Victimization', spotId: utils.spotId.front },
    { name: 'Disorientation', spotId: utils.spotId.front },

    { name: 'Lack of purpose', spotId: utils.spotId.crown },
    { name: 'Disenchantment', spotId: utils.spotId.crown },
    { name: 'Negativity', spotId: utils.spotId.crown },
    { name: 'Self pity', spotId: utils.spotId.crown },
    { name: 'Separateness', spotId: utils.spotId.crown },
    { name: 'Suffering', spotId: utils.spotId.crown },
    { name: 'Solitude', spotId: utils.spotId.crown },
    { name: 'Anguish', spotId: utils.spotId.crown },  
];

export default {
    newMoods,
    newSpots,
    newEmotions,
    newPhysicalSymptoms,
    newEmotionalSymptoms
}