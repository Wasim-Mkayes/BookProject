var app = new Vue({
    el: '#app',
    data: {
        CurrentWeight: null,
        IdealWeight: null,
        CurrentEnergy: 0,
        IdealEnergy: 0,
        CurrentSelfImage: 0,
        IdealSelfImage: 0,
        CurrentSelfConfidence: 0,
        IdealSelfConfidence: 0,
        CurrentShame: 0,
        IdealShame: 0,
        CurrentControl: 0,
        IdealControl: 0,
        CurrentMood: 0,
        IdealMood: 0,
        CurrentFog: 0,
        IdealFog: 0,
        CurrentSelfWorth: 0,
        IdealSelfWorth: 0,
        NewRange: 0,
        CurrentHappiness: 0,
        IdealHappiness: 0,
        familyCheck: '',
        socialCheck: '',
        jobCheck: '',
        loveCheck: '',
        ChapterBoxes: [],
        MethodBoxes: [],
        QuotesOne: [
            "My current weight range has had an effect on my personal characteristics and therefore has impacted the type of example I am for my kids",
            "My lifestyle is limiting the level of self-love experience in there for a limiting the level of love I can give to others",
            "My current lifestyle / eating behaviors is the root cause of many of the problems in my life 9  low energy, mood, self-confidence Etc)",
            "The “voice in my head”  is significantly impacted by my current lifestyle?",
            "I program my inner voice to constantly point out and remind me of my flaws and insecurities",
            "I use food and alcohol to numb the emotions in my life, which prevents me from showing up and being seen"
        ],
        QuotesTwo: [
            "I use carbs/ sugar to self medicate myself from emotional pain / distress in the short-term with no regard for the long-term consequences",
            "I have not thought of myself as beautiful in a decade maybe never",
            "my current lifestyle / habits have created an environment that increases the likelihood of those around me suffering because of their relationship with food / sugar",
            "My current eating behavior changes how I not only talk to and about myself but how I treat myself as well.",
            "I currently use food &/or alcohol to numb and avoid  emotions like (  boredom, loneliness, stress, sadness, Shame, unworthiness)  which prevents me from getting to a higher level of love, joy and happiness"
        ],
        Quotes: [],

        radios: [{ title: '1) Family i.e.', label: 'Spouse / significant other / boyfriend / girlfriend/ kids', name: 'familyCheck', id:'FamilyCheck' },
        { title: '2) Social Relationships i.e.', label: 'friends / peer groups / hobbies', name: 'socialCheck', id:'SocialCheck' },
        { title: '3) Job', label: '', name: 'jobCheck', id:'JobCheck' },
        { title: '4) Love Life i.e.', label: 'intimacy, closeness w/ others', name: 'loveCheck', id:'LoveCheck' }],

        radiosOptions: ['No affect', 'Some affect', 'Great affect'],
        
        ChapBoxes: [{id:'Overwhelmed',value:'Overwhelmed'},
        {id:'Feeling-Broken',value:'Feeling Broken'},
        {id:'Loneliness',value:'Loneliness'},
        {id:'Disgust',value:'Disgust'},
        {id:'Boredom',value:'Boredom'}],

        ChapBoxes2:[{id:'Sadness',value:'Sadness'},
        {id:'Unworthiness',value:'Unworthiness'},
        {id:'shame',value:'Shame'},
        {id:'Embarrassment',value:'Embarrassment'},
        {id:'Inadequate',value:'Inadequate'}],

        ChapBoxes3:[{id:'Anxious',value:'Anxious'},
        {id:'Hurt',value:'Hurt'},
        {id:'Helpless',value:'Helpless'}],

        MethBoxes:[{id:'Alcohol',value:'Alcohol'},
        {id:'Sugar',value:'Sugar'},
        {id:'Breads',value:'Breads'},
        {id:'Sweets',value:'Sweets'}],

        MethBoxes2:[{id:'SaltyFoods',value:'Salty Foods'},
        {id:'FastFood',value:'Fast Food'},
        {id:'FattyFoods',value:'Fatty Foods'},
        {id:'HighCarbFoods',value:'High Carb Foods'}],

        ranges: [{label:"Energy",current:"CurrentEnergy",ideal:"IdealEnergy"},
        {label:'Self-Image',current:'CurrentSelfImage',ideal:'IdealSelfImage'},
        {label:'Self-confidence',current:'CurrentSelfConfidence',ideal:'IdealSelfConfidence'},
        {label:'Shame',current:'CurrentShame',ideal:'IdealShame'},
        {label:'Feel in Control',current:'CurrentControl',ideal:'IdealControl'},
        {label:'Mood',current:'CurrentMood',ideal:'IdealMood'},
        {label:'Brain Fog',current:'CurrentFog',ideal:'IdealFog'},
        {label:'Self Worth',current:'CurrentSelfWorth',ideal:'IdealSelfWorth'},
        {label:'Overall Happiness',current:'CurrentHappiness',ideal:'IdealHappiness'}]
        }
})