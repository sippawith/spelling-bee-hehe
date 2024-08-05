const words = [
    "Blame", "Resemble", "Fest", "Bribe", "Colleague", "Vehicle", "Situation",
    "Urgent", "Identity", "Client", "Curious", "Unique", "Schedule", "Mitigate",
    "Failure", "Potential", "Available", "Injured", "Parcel", "Persuade", 
    "Authority", "Irrelevant", "Exaggerate", "Pamphlet", "Obedient", "Trespassing", 
    "Subsequent", "Diabetes", "Appreciate", "Punctual", "Doubt", "Caution", 
    "Service", "Caviar", "Purchase", "Conscious", "Excellent", "Equipment", 
    "Language", "Refund", "Release", "Refuse", "Prioritize", "Negotiate", 
    "Recruit", "Profitability", "Authorize", "Entrepreneur", "Quantitative", 
    "Qualitative", "Ethics", "Equity", "Franchise", "Liability", "Strategy", 
    "Patent", "Revenue", "Tariff", "Viability", "Niche", "Stakeholder", 
    "Outsourcing", "Depreciation", "Benchmark", "Compliance"
];

const translations = {
    "Blame": "ตำหนิ",
    "Resemble": "คล้ายคลึง",
    "Fest": "เทศกาล",
    "Bribe": "สินบน",
    "Colleague": "เพื่อนร่วมงาน",
    "Vehicle": "ยานพาหนะ",
    "Situation": "สถานการณ์",
    "Urgent": "เร่งด่วน",
    "Identity": "อัตลักษณ์",
    "Client": "ลูกค้า",
    "Curious": "อยากรู้อยากเห็น",
    "Unique": "เอกลักษณ์",
    "Schedule": "ตารางเวลา",
    "Mitigate": "บรรเทา",
    "Failure": "ความล้มเหลว",
    "Potential": "ศักยภาพ",
    "Available": "ใช้ได้",
    "Injured": "บาดเจ็บ",
    "Parcel": "พัสดุ",
    "Persuade": "ชักชวน",
    "Authority": "อำนาจ",
    "Irrelevant": "ไม่เกี่ยวข้อง",
    "Exaggerate": "พูดเกินจริง",
    "Pamphlet": "แผ่นพับ",
    "Obedient": "เชื่อฟัง",
    "Trespassing": "บุกรุก",
    "Subsequent": "ภายหลัง",
    "Diabetes": "โรคเบาหวาน",
    "Appreciate": "ขอบคุณ",
    "Punctual": "ตรงต่อเวลา",
    "Doubt": "สงสัย",
    "Caution": "ความระมัดระวัง",
    "Service": "บริการ",
    "Caviar": "ไข่ปลาคาเวียร์",
    "Purchase": "ซื้อ",
    "Conscious": "มีสติ",
    "Excellent": "ดีเลิศ",
    "Equipment": "อุปกรณ์",
    "Language": "ภาษา",
    "Refund": "คืนเงิน",
    "Release": "ปล่อย",
    "Refuse": "ปฏิเสธ",
    "Prioritize": "ให้ความสำคัญ",
    "Negotiate": "เจรจา",
    "Recruit": "สรรหา",
    "Profitability": "ความสามารถในการทำกำไร",
    "Authorize": "อนุมัติ",
    "Entrepreneur": "ผู้ประกอบการ",
    "Quantitative": "เชิงปริมาณ",
    "Qualitative": "เชิงคุณภาพ",
    "Ethics": "จริยธรรม",
    "Equity": "ความเสมอภาค",
    "Franchise": "แฟรนไชส์",
    "Liability": "หนี้สิน",
    "Strategy": "กลยุทธ์",
    "Patent": "สิทธิบัตร",
    "Revenue": "รายได้",
    "Tariff": "ภาษีศุลกากร",
    "Viability": "ความสามารถในการดำรงชีวิต",
    "Niche": "ส่วนตลาด",
    "Stakeholder": "ผู้มีส่วนได้ส่วนเสีย",
    "Outsourcing": "การจ้างงานภายนอก",
    "Depreciation": "ค่าลดลง",
    "Benchmark": "มาตรฐานเปรียบเทียบ",
    "Compliance": "การปฏิบัติตาม"
};

const definitions = {
    "Blame": "Assign responsibility for a fault or wrong",
    "Resemble": "Have qualities or features, especially those of appearance, in common with (someone or something); look or seem like",
    "Fest": "A festival or celebration",
    "Bribe": "Persuade (someone) to act in one's favor, typically illegally or dishonestly, by a gift of money or other inducement",
    "Colleague": "A person with whom one works, especially in a profession or business",
    "Vehicle": "A thing used for transporting people or goods, especially on land, such as a car, truck, or cart",
    "Situation": "A set of circumstances in which one finds oneself; a state of affairs",
    "Urgent": "Requiring immediate action or attention",
    "Identity": "The fact of being who or what a person or thing is",
    "Client": "A person or organization using the services of a lawyer or other professional person or company",
    "Curious": "Eager to know or learn something",
    "Unique": "Being the only one of its kind; unlike anything else",
    "Schedule": "A plan for carrying out a process or procedure, giving lists of intended events and times",
    "Mitigate": "Make less severe, serious, or painful",
    "Failure": "Lack of success",
    "Potential": "Having or showing the capacity to become or develop into something in the future",
    "Available": "Able to be used or obtained; at someone's disposal",
    "Injured": "Harmed, damaged, or impaired",
    "Parcel": "A package",
    "Persuade": "Cause (someone) to do something through reasoning or argument",
    "Authority": "The power or right to give orders, make decisions, and enforce obedience",
    "Irrelevant": "Not connected with or relevant to something",
    "Exaggerate": "Represent (something) as being larger, better, or worse than it really is",
    "Pamphlet": "A small booklet or leaflet containing information or arguments about a single subject",
    "Obedient": "Complying or willing to comply with orders or requests; submissive to another's will",
    "Trespassing": "Enter the owner's land or property without permission",
    "Subsequent": "Coming after something in time; following",
    "Diabetes": "A disease in which the body's ability to produce or respond to the hormone insulin is impaired",
    "Appreciate": "Recognize the full worth of",
    "Punctual": "Happening or doing something at the agreed or proper time",
    "Doubt": "A feeling of uncertainty or lack of conviction",
    "Caution": "Care taken to avoid danger or mistakes",
    "Service": "The action of helping or doing work for someone",
    "Caviar": "The pickled roe of sturgeon or other large fish, eaten as a delicacy",
    "Purchase": "Acquire (something) by paying for it; buy",
    "Conscious": "Aware of and responding to one's surroundings",
    "Excellent": "Extremely good; outstanding",
    "Equipment": "The necessary items for a particular purpose",
    "Language": "The method of human communication, either spoken or written, consisting of the use of words in a structured and conventional way",
    "Refund": "Pay back (money), typically to a customer who is not satisfied with goods or services bought",
    "Release": "Allow or enable to escape from confinement; set free",
    "Refuse": "Indicate or show that one is not willing to do something",
    "Prioritize": "Designate or treat (something) as more important than other things",
    "Negotiate": "Obtain or bring about by discussion",
    "Recruit": "Enlist (someone) in the armed forces",
    "Profitability": "The degree to which a business or activity yields profit or financial gain",
    "Authorize": "Give official permission for or approval to (an undertaking or agent)",
    "Entrepreneur": "A person who organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so",
    "Quantitative": "Relating to, measuring, or measured by the quantity of something rather than its quality",
    "Qualitative": "Relating to, measuring, or measured by the quality of something rather than its quantity",
    "Ethics": "Moral principles that govern a person's behavior or the conducting of an activity",
    "Equity": "The quality of being fair and impartial",
    "Franchise": "An authorization granted by a government or company to an individual or group enabling them to carry out specified commercial activities",
    "Liability": "The state of being responsible for something, especially by law",
    "Strategy": "A plan of action or policy designed to achieve a major or overall aim",
    "Patent": "A government authority or license conferring a right or title for a set period, especially the sole right to exclude others from making, using, or selling an invention",
    "Revenue": "Income, especially when of a company or organization and of a substantial nature",
    "Tariff": "A tax or duty to be paid on a particular class of imports or exports",
    "Viability": "Ability to work successfully",
    "Niche": "A comfortable or suitable position in life or employment",
    "Stakeholder": "A person with an interest or concern in something, especially a business",
    "Outsourcing": "Obtain (goods or a service) from an outside or foreign supplier, especially in place of an internal source",
    "Depreciation": "A reduction in the value of an asset over time, in particular",
    "Benchmark": "A standard or point of reference against which things may be compared or assessed",
    "Compliance": "The action or fact of complying with a wish or command"
};

let currentWordIndex = -1;
let score = 0;
let hearts = 3; // Default number of hearts

function startGame() {
    // Ask user for number of hearts
    const userHearts = parseInt(prompt('How many hearts do you want to start with?', '3'), 10);

    // Validate user input
    if (isNaN(userHearts) || userHearts < 1 || userHearts > 9999999999999999999999999999999999999999999999999999999999999) {
        alert('Invalid number of hearts. Setting to default (3).');
        hearts = 3;
    } else {
        hearts = userHearts;
    }

    // Initialize game
    document.getElementById('hiddenText').style.display = 'block';
    document.getElementById('hearWordButton').style.display = 'block';
    document.getElementById('wordInput').style.display = 'block';
    document.getElementById('result').textContent = '';
    document.getElementById('translation').style.display = 'none';
    document.getElementById('definition').style.display = 'none';
    document.getElementById('nextWordButton').style.display = 'none';
    document.getElementById('hearts').textContent = 'Hearts: ' + '❤️'.repeat(hearts);
    nextWord();
}

function speakWord() {
    if (currentWordIndex >= 0) {
        let word = words[currentWordIndex];
        let utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

function checkWord() {
    const userWord = document.getElementById('wordInput').value.trim();
    const correctWord = words[currentWordIndex];
    if (userWord.toLowerCase() === correctWord.toLowerCase()) {
        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result').style.color = 'green';
        score++;
        document.getElementById('score').textContent = 'Score: ' + score;
        document.getElementById('nextWordButton').style.display = 'block';
    } else {
        document.getElementById('result').textContent = 'Incorrect! The correct word is ' + correctWord;
        document.getElementById('result').style.color = 'red';
        hearts--;
        if (hearts > 0) {
            document.getElementById('hearts').textContent = 'Hearts: ' + '❤️'.repeat(hearts);
            document.getElementById('nextWordButton').style.display = 'block';
        } else {
            document.getElementById('hearts').textContent = 'Hearts: ' + '❤️'.repeat(hearts);
            document.getElementById('result').textContent = 'Game Over! Final Score: ' + score;
            document.getElementById('result').style.color = 'red';
            document.getElementById('hiddenText').style.display = 'none';
            document.getElementById('hearWordButton').style.display = 'none';
            document.getElementById('wordInput').style.display = 'none';
            document.getElementById('nextWordButton').style.display = 'none';
        }
        