import React, { useEffect, useState } from "react";
import TopNav from './TopNav'
import { Button, Card, Container, Row, Col } from "react-bootstrap";


// Original quiz data
const quizData = [
    // Alphabets
    {
  category: "Alphabet",
  question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/A.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
  options: ["A", "F", "H", "Z"],
  answer: "A",
   },
    {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/B.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["A", "B", "H", "Z"],
      answer: "B",
    },
    {
      category: "Alphabet",
     question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/C.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["C", "R", "E", "W"],
      answer: "C",
    },
    {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/D.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["F", "J", "D", "Q"],
      answer: "D",
    },
    {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/E.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "E", "I"],
      answer: "E",
    },
     {
      category: "Alphabet",
     question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/F.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "E", "I"],
      answer: "F",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/G.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["A", "G", "F", "I"],
      answer: "G",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/H.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "E", "I"],
      answer: "H",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/I.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["I", "F", "E", "K"],
      answer: "I",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/J.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "J", "I"],
      answer: "J",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/K.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "E", "K"],
      answer: "K",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/L.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["L", "F", "E", "I"],
      answer: "L",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/M.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "M", "E", "I"],
      answer: "M",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/N.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "N", "E", "I"],
      answer: "N",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/O.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "E", "O"],
      answer: "O",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/P.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "P", "I"],
      answer: "P",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/Q.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "Q", "I"],
      answer: "Q",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/R.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "E", "R"],
      answer: "R",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/S.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "S", "E", "I"],
      answer: "S",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/T.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "F", "T", "I"],
      answer: "T",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/U.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["U", "F", "E", "I"],
      answer: "U",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/V.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "V", "A", "I"],
      answer: "V",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/W.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options:["C", "B", "A", "W"],
      answer: "W",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/X.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["H", "X", "E", "I"],
      answer: "X",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/Y.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["Y", "G", "H", "I"],
      answer: "Y",
    },
     {
      category: "Alphabet",
      question: ( <center> What Alphabet is this? <br /> {<img src="./Images/Alphabets/Z.jpg" alt="Sign for A" style={{ width: "60%" }} />} </center>),
      options: ["A", "G", "I", "Z"],
      answer: "Z",
    },

    //Numbers
    {
      category: "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/0.mp4"></video>}</center>,
      options: ["1", "0"],
      answer: "0",
    },
    {
      category:  "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/1.mp4"></video>}</center>,
      options: ["0", "1"],
      answer: "1",
    },
    {
      category:  "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/2.mp4"></video>}</center>,
      options: ["2", "7"],
      answer: "2",
    },
    {
      category: "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/3.mp4"></video>}</center>,
      options: ["3", "8"],
      answer: "3",
    },
    {
      category: "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/4.mp4"></video>}</center>,
      options: ["2", "4"],
      answer: "4",
    },
    {
      category:  "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/5.mp4"></video>}</center>,
      options: ["5", "9"],
      answer: "5",
    },
    {
      category:  "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/6.mp4"></video>}</center>,
      options: ["6", "10"],
      answer: "6",
    },
    {
      category:  "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/7.mp4"></video>}</center>,
      options: ["3", "7"],
      answer: "7",
    },
    {
      category:  "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/8.mp4"></video>}</center>,
      options: ["8", "4"],
      answer: "8",
    },
    {
      category:  "Numbers",
      question: <center>What Number is this ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/9.mp4"></video>}</center>,
      options: ["6", "9"],
      answer: "9",
    },
   
  
    // Vegetables
  {
      category:  "Vegetables",
      question: <center>Guess the vegetable ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Vegetables/Tomato.mp4"></video>}</center>,
      options: ["Cabbage", "Carrot", "Tomato", "Beans"],
      answer: "Tomato",
  },
  {
      category:  "Vegetables",
      question: <center>Guess the Vegetable ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Vegetables/Cabbage.mp4"></video>}</center>,
      options: ["Cabbage", "Carrot", "Tomato", "Beans"],
      answer: "Cabbage",
  },
  {
      category:  "Vegetables",
      question: <center>Guess the Vegetable ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Vegetables/Potato.mp4"></video>}</center>,
      options: ["Cabbage", "Potato", "Tomato", "Beans"],
      answer: "Potato",
  },
  {
      category:  "Vegetables",
      question: <center>Guess the Vegetable ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Vegetables/Garlic.mp4"></video>}</center>,
      options: ["Cabbage", "Carrot", "Tomato", "Garlic"],
      answer: "Garlic",
  },
  {
      category:  "Vegetables",
      question: <center>Guess the Vegetable ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Vegetables/Onion.mp4"></video>}</center>,
      options: ["Cabbage", "Onion", "Tomato", "Beans"],
      answer: "Onion",
  },
// Animals
    {
      category: "Animals",
      question: <center>Guess the animal ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Animals/Cat.mp4"></video>}</center>,
      options: ["Cat", "Dog", "Tiger", "Rat"],
      answer: "Cat",
    },
    {
      category: "Animals",
      question: <center>Guess the animal ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Animals/Giraffe.mp4"></video>}</center>,
      options: ["Cat", "Tiger", "Giraffe", "Rat"],
      answer: "Giraffe",
    },
    {
      category: "Animals",
      question: <center>Guess the animal ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Animals/Gorilla.mp4"></video>}</center>,
      options: ["Donkey", "Rat", "Lion", "Gorilla"],
      answer: "Gorilla",
    },
    {
      category: "Animals",
      question: <center>Guess the animal ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Animals/Lion.mp4"></video>}</center>,
      options: ["Lion", "Dog", "Tiger", "Rat"],
      answer: "Lion",
    },
    {
      category: "Animals",
      question: <center>Guess the animal ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Animals/Rat.mp4"></video>}</center>,
      options: ["Cat", "Dog", "Tiger", "Rat"],
      answer: "Rat",
    },
    {
      category: "Animals",
      question: <center>Guess the animal ? <br/>{<video  autoPlay muted loop playsInline style={{width:"100%"}} src="./Videos/Animals/Tiger.mp4"></video>}</center>,
      options: ["Cat", "Dog", "Tiger", "Rat"],
      answer: "Tiger",
    },
  
  ];
  

// Function to shuffle an array
const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sortOrder: Math.random() }))
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(({ sortOrder, ...item }) => item);
};


function Quiz() {
    const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Shuffle questions and pick 10 when the component loads
  useEffect(() => {
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffledQuestions.slice(0, 10));
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffledQuestions.slice(0, 10));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  
  return (
    <div>
        <TopNav/>
        <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} sm={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <h1 style={{fontFamily:"fantasy"}} className="text-center">            <img style={{ width: "40px",margin:"10px" }} src="./Images/logo.jpeg" alt="Add Item Icon" />
              Quiz</h1> <hr></hr>

              {showScore ? (
                <div className="text-center">
                  <h2>Your Score: {score} / {quizQuestions.length}</h2>
                  <Button onClick={resetQuiz} variant="primary">
                    Restart Quiz
                  </Button>
                </div>
              ) : (
                quizQuestions.length > 0 && (
                  <div>
                    <h4 style={{fontFamily:"serif",fontWeight:"bold",backgroundColor:"lightgray",padding:"5px",borderRadius:"10px"}} className="text-center">
                      Question {currentQuestionIndex + 1} / {quizQuestions.length}
                    </h4>
                    <Card className="my-3">
                      <Card.Body>
                        <h5 style={{fontFamily:"monospace"}}>{quizQuestions[currentQuestionIndex].question}</h5>
                        <div className="d-flex flex-column align-items-center">
                          {quizQuestions[currentQuestionIndex].options.map(
                            (option, index) => (
                              <Button
                                key={index}
                                variant="outline-primary"
                                className="my-2"
                                onClick={() =>
                                  handleAnswerClick(
                                    option === quizQuestions[currentQuestionIndex].answer
                                  )
                                }
                                style={{ width: "80%" }}
                              >
                                {option}
                              </Button>
                            )
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                )
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


    </div>
  )
}

export default Quiz
