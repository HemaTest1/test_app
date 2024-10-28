// // const db = require('../models'); // Ensure the path is correct
// // const XLSX = require('xlsx');

// // const uploadExcel = async (req, res) => {

// //     // Combined method to handle Answer, Option, and Question data at the same time
// //         if (!req.file) {
// //             return res.status(400).send({ message: "No file uploaded" });
// //         }

// //         const filepath = req.file.path;
// //         const workbook = XLSX.readFile(filepath);
// //         const sheetName = workbook.SheetNames[0];
// //         const worksheet = workbook.Sheets[sheetName];
// //         const data = XLSX.utils.sheet_to_json(worksheet);

// //         console.log(data, "================data");

// //         // Arrays to hold valid rows for each table
// //         const validAnswers = [];
// //         const validOptions = [];
// //         const validQuestions = [];

// //         // Iterate over the rows and detect columns for different types
// //         for (const row of data) {
// //             // Check for answers
// //             if (row.answer !== undefined && row.questionNumber !== undefined) {
// //                 validAnswers.push({
// //                     answer: row.answer,
// //                     questionNumber: row.questionNumber,
// //                 });
// //             }

// //             // Check for options
// //             if (row.option1 !== undefined && row.option2 !== undefined && row.option3 !== undefined && row.questionNumber !== undefined) {
// //                 validOptions.push({
// //                     option1: row.option1,
// //                     option2: row.option2,
// //                     option3: row.option3,
// //                     questionNumber: row.questionNumber,
// //                 });
// //             }

// //             // Check for questions
// //             if (row.questionNumber !== undefined && row.questionName !== undefined) {
// //                 validQuestions.push({
// //                     questionNumber: row.questionNumber,
// //                     questionName: row.questionName,
// //                 });
// //             }
// //         }

// //         console.log(`Valid Answers: ${validAnswers.length}`);
// //         console.log(`Valid Options: ${validOptions.length}`);
// //         console.log(`Valid Questions: ${validQuestions.length}`);

// //         // If no valid rows are found, return an error
// //         if (validAnswers.length === 0 && validOptions.length === 0 && validQuestions.length === 0) {
// //             return res.status(400).send({ message: "No valid rows to insert." });
// //         }

// //         try {
// //             // Insert data into each table if applicable
// //             if (validAnswers.length > 0) {
// //                 console.log("Inserting answers...");
// //                 await db.answer.bulkCreate(validAnswers);
// //             }
// //             if (validOptions.length > 0) {
// //                 console.log("Inserting options...");
// //                 await db.option.bulkCreate(validOptions);
// //             }
// //             if (validQuestions.length > 0) {
// //                 console.log("Inserting questions...");
// //                 await db.question.bulkCreate(validQuestions);
// //             }

// //             res.status(200).send({ message: 'Success: Data inserted for answers, options, and questions' });
// //         } catch (error) {
// //             console.error('Error details:', error);
// //             res.status(500).send({ message: 'Error inserting data', error: error.message || error });
// //         }
// //     }


// // module.exports = {
// //     uploadExcel,
// // }

// const db = require('../models');  // Assuming the models are set up correctly
// const XLSX = require('xlsx');

// const processExcel = async (req) => {  // Removed res from parameters
//     if (!req.file) {
//         throw new Error("No file uploaded");
//     }

//     const filepath = req.file.path;
//     const workbook = XLSX.readFile(filepath);
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const data = XLSX.utils.sheet_to_json(worksheet);

//     // Utility functions to handle formatting
//     const preserveStringFormat = (value) => (value != null ? String(value) : '');
//     const cleanString = (value) => (value != null ? String(value).trim().replace(/\s+/g, ' ') : '');

//     // Iterate over the rows in the Excel file
//     for (const row of data) {
//         const [
//             question_description,
//             option1,
//             option2,
//             option3,
//             answer_description
//         ] = [
//             preserveStringFormat(row["question_description"]),
//             cleanString(row["option1"]),
//             cleanString(row["option2"]),
//             cleanString(row["option3"]),
//             preserveStringFormat(row["answer_description"])
//         ];
//         console.log("===========================>>>",answer_description,"======================>answer_description", )
//         console.log(question_description,"======================>")
//         console.log(option1,"======================>")
//         // Insert question into the database
// //         const question = await db.question.create({
// //             question_description: JSON.stringify(question_description),
// //         });

// //         const questionId = question.question_id;

// //       console.log(questionId,"==========================question")
// //         // Ensure options are non-empty and insert them
// //         const options = [option1, option2, option3];
// //         console.log(options,"=============options")
// //         for (const optionText of options) {
// //             if (optionText) {
// //           const option = await db.option.create({
                    
// //                     question_id: questionId,    // Ensure this matches your schema
// //                     option_description: optionText
// //                 });
               
// //             }
// //         }

// //         //   console.log(db.option.data,"==================option")
// //         // const option = await db.option.findByPk(option_id);
// //          const  optionId = db.option.option_id;


// //         // Ensure answers are non-empty and insert them
// //         const answer = answer_description.split(',').map(opt => opt.trim());
// //         for (const correctOption of answer) {
// //             if (correctOption) {
// //                 await db.answer.create({
// //                     option_id: optionId,    // Ensure this matches your schema
// //                     answer_description: correctOption
// //                 });
// //             }
// //         }


// for (const row of data) {
//     // Insert question into the database
//     const question = await db.question.create({
//         question_description: JSON.stringify(row["question_description"]),
//     });

//     const questionId = question.question_id;

//     // Insert options and store their IDs
//     const options = [row["option1"], row["option2"], row["option3"]];
//     const optionIds = [];
//     for (const optionText of options) {
//         if (optionText) {
//             const option = await db.option.create({
//                 question_id: questionId,
//                 option_description: optionText,
//             });
//             optionIds.push(option.option_id); // Store the ID for later use
//         }
//     }

//     // Insert answers with correct option IDs
//     const answerDescriptions = row["answer_description"].split(',').map(opt => opt.trim());
//     for (const answerText of answerDescriptions) {
//         const correctOptionIndex = options.indexOf(answerText);
//         if (correctOptionIndex >= 0) {
//             await db.answer.create({
//                 option_id: optionIds[correctOptionIndex],
//                 answer_description: answerText,
//             });
//         }
//     }
// }













//     }
// };
// // processExcel()
// module.exports = { processExcel };

// const db = require('../models');  // Assuming the models are set up correctly
// const XLSX = require('xlsx');

// const processExcel = async (req) => {  
//     if (!req.file) {
//         throw new Error("No file uploaded");
//     }

//     const filepath = req.file.path;
//     const workbook = XLSX.readFile(filepath);
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const data = XLSX.utils.sheet_to_json(worksheet);

//     // Utility functions to handle formatting
//     const preserveStringFormat = (value) => (value != null ? String(value) : '');
//     const cleanString = (value) => (value != null ? String(value).trim().replace(/\s+/g, ' ').toLowerCase() : '');  // Convert to lower case for case-insensitive matching

//     // Iterate over the rows in the Excel file
//     for (const row of data) {
//         const question_description = preserveStringFormat(row["question_description"]);
//         const option1 = cleanString(row["option1"]);
//         const option2 = cleanString(row["option2"]);
//         const option3 = cleanString(row["option3"]);
//         const answer_description = preserveStringFormat(row["answer_description"]);
//         const topic_id = preserveStringFormat(row["topic_id"]);

//          console.log(topic_id,"====================>topicid")
//         console.log("Processing question:", question_description);

//         // Check if the question already exists
//         const existingQuestion = await db.question.findOne({
//             where: { question_description: JSON.stringify(question_description) }
//         });

//         if (existingQuestion) {
//             console.log(`Question already exists: ${question_description}`);
//             continue;  // Skip to the next row if the question already exists
//         }

//         // Insert the question since it doesn't exist in the database
//         const question = await db.question.create({
//             topic_id : topic_id,
//             question_description: question_description,
//         });

//         const questionId = question.question_id;
//         console.log("New question inserted with ID:", questionId);

//         // Insert options and store their IDs
//         const options = [option1, option2, option3];
//         const optionIds = [];
//         for (const optionText of options) {
//             if (optionText) {
//                 const option = await db.option.create({
//                     question_id: questionId,
//                     option_description: optionText,
//                 });
//                 optionIds.push(option.option_id); // Store the ID for later use
//             }
//         }
//         console.log("Option IDs for question:", optionIds);

//         // Insert answers with correct option IDs
//         const answerDescriptions = answer_description.split(',').map(opt => cleanString(opt));
//         for (const answerText of answerDescriptions) {
//             const correctOptionIndex = options.indexOf(answerText);
//             if (correctOptionIndex >= 0) {
//                 await db.answer.create({
//                     option_id: optionIds[correctOptionIndex],
//                     answer_description: answerText,
//                 });
//                 console.log(`Answer inserted: ${answerText} for option ID ${optionIds[correctOptionIndex]}`);
//             } else {
//                 console.log(`No matching option found for answer: ${answerText}`);
//             }
//         }
//     }
// };



const db = require('../models');  // Assuming the models are set up correctly
const XLSX = require('xlsx');

const processExcel = async (req) => {
    if (!req.file) {
        throw new Error("No file uploaded");
    }
    const {topic_id} = req.params;
    console.log(topic_id, "===============================>topiceid")
    const filepath = req.file.path;
    const workbook = XLSX.readFile(filepath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    // Utility functions to handle formatting
    const preserveStringFormat = (value) => (value != null ? String(value) : '');
    const cleanString = (value) => (value != null ? String(value).trim().replace(/\s+/g, ' ').toLowerCase() : '');

    for (const row of data) {
        const question_description = preserveStringFormat(row["question_description"]);
        const option1 = cleanString(row["option1"]);
        const option2 = cleanString(row["option2"]);
        const option3 = cleanString(row["option3"]);
        const answer_description = preserveStringFormat(row["answer_description"]);
        

        
        console.log("Processing question:", question_description);


        // Check if the question already exists
        const existingQuestion = await db.question.findOne({
            where: { question_description: JSON.stringify(question_description) }
        });
        if (existingQuestion) {
            console.log(`Question already exists: ${question_description}`);
            continue;  // Skip to the next row if the question already exists
        }

        // Insert the question since it doesn't exist in the database
        const question = await db.question.create({
            topic_id: topic_id,
            question_description: question_description,
        });

        const questionId = question.question_id;
        console.log("New question inserted with ID:", questionId);

        // Insert options and store their IDs
        const options = [option1, option2, option3];
        const optionIds = [];

        for (const optionText of options) {
            if (optionText) {
                const option = await db.option.create({
                    question_id: questionId,
                    option_description: optionText,
                });
                optionIds.push(option.option_id); // Store the ID for later use
            }
        }
        console.log("Option IDs for question:", optionIds);

        // Insert answers with correct option IDs
        const answerDescriptions = answer_description.split(',').map(opt => cleanString(opt));
        for (const answerText of answerDescriptions) {
            const correctOptionIndex = options.indexOf(answerText);
            if (correctOptionIndex >= 0) {
                await db.answer.create({
                    option_id: optionIds[correctOptionIndex],
                    answer_description: answerText,
                });
                console.log(`Answer inserted: ${answerText} for option ID ${optionIds[correctOptionIndex]}`);
            } else {
                console.log(`No matching option found for answer: ${answerText}`);
            }
        }
    }
};

module.exports = { processExcel };




module.exports = { processExcel };
