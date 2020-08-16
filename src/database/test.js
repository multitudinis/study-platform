const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // inserur dados
    proffyValue = {
        name: 'lucas pessoa', 
        avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQE5rMrv9NJT7w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=P0WB_1iJ-Xy41l2B2lV65Mm7-TakOYl16bHWtyRR6es',
        whatsapp: '51992131102', 
        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
    }

    classValue = {
        subject: 'Redes',
        cost:'20', 
        //o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday:1, 
            time_from:720, 
            time_to:1220
        },
        {
            weekday:0, 
            time_from:520, 
            time_to:1220   
        }
    ]

//   await createProffy(db, {proffyValue, classValue, classScheduleValue})
    //consultar os dados inseridos
    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
 //   console.log(selectedProffys)
 //consultar as classes de um determinado proffy
 //e trazer junto os dados do proffy
 const selectClassesAndProffys = await db.all(`
 SELECT classes.*, proffys.*
 FROM proffys
 JOIN classes ON (classes.proffy_id = proffys.id)
 WHERE classes.proffy_id = 1;
 `)
 //console.log(selectClassesAndProffys)
 
 //o horario que a pessoa trabalha, exemp, e das 8-18h
 //o horario do time_from 8h precisa ser menor ou igual ao horario solicidado
 //o time_to precisa ser acima

 const selectedClassesSchedules = await db.all(`
 SELECT class_schedule.*
 FROM class_schedule
 WHERE class_schedule.class_id = "1"
 AND class_schedule.weekday = "0"
 AND class_schedule.time_from <= "1300"
 AND class_schedule.time_to > "1300"
 `)
 //console.log(selectClassesSchedules)
})