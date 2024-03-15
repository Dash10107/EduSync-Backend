const fs = require('fs');
const subjectsData = require('./Modules');
const chaptersData = require('./Chapters');
const questionsData = require('./Questions');

const findSubjectName = (subjectId) => {
    const subject = subjectsData.find(subject => subject.id === parseInt(subjectId));    
    return subject ? subject.name : '';
};

const findChapterTitle = (subjectId, chapterId) => {
    const chapters = chaptersData[subjectId] || [];
    const chapter = chapters.find(chapter => chapter.id === parseInt(chapterId));
    return chapter ? chapter.title : '';
};

const findSubtopicName = (subjectId, chapterId, subtopicId) => {
    const subjectChapters = chaptersData[subjectId] || [];
    const chapter = subjectChapters.find(chapter => chapter.id === parseInt(chapterId));
    if (chapter && chapter.subtopics) {
        const subtopic = chapter.subtopics.find(subtopic => subtopic.id === subtopicId);
        return subtopic ? subtopic.name : '';
    }
    return '';
};

const escapeSpecialCharacters = (text) => {
    return text.replace(/"/g, '""'); // Replace each occurrence of " with ""
};

const optionsToString = (options) => {
    if (!options || !Array.isArray(options)) {
        return '';
    }
    return options.map(option => `"${escapeSpecialCharacters(option)}"`).join('; ');
};

let csvContent = 'subject;chapter;subchapter;question;options;correct_answer\n';

for (const subjectId in questionsData) {
    const chapters = questionsData[subjectId];
    for (const chapterId in chapters) {
        const subtopics = chapters[chapterId];
        for (const subtopicId in subtopics) {
            const questions = subtopics[subtopicId];
            const subjectName = findSubjectName(subjectId);
            const chapterTitle = findChapterTitle(subjectId, chapterId);
            const subtopicName = findSubtopicName(subjectId, chapterId, subtopicId);
            questions.forEach(({ id, question, options, correctAnswer }) => {
                const optionsString = optionsToString(options);
                csvContent += `"${escapeSpecialCharacters(subjectName)}";"${escapeSpecialCharacters(chapterTitle)}";"${escapeSpecialCharacters(subtopicName)}";"${escapeSpecialCharacters(question)}";"${optionsString}";"${escapeSpecialCharacters(correctAnswer)}"\n`;
            });
        }
    }
}

fs.writeFileSync('output.csv', csvContent, 'utf-8');
console.log('CSV file generated successfully.');
