import React from "react";

const About = ({ teachersName }) => {
    return (
        <div className="card text-center">
            <div className="card-header">درباره سازنده</div>
            <div className="card-body">
                <h6 className="card-title"> 
                به عنوان فارغ التحصیل مهندسی کامپیوتر با مدرک لیسانس و فوق لیسانس، پایه قوی در توسعه نرم افزار و همچمین علاقه خاصی به توسعه FrontEnd دارم. من زمان قابل توجهی را صرف یادگیری و تقویت مهارت های خود در HTML، CSS، جاوا اسکریپت، React.js،  Git، Sass و سایر فناوری های کلیدی FrontEnd کرده ام. اگرچه هنوز این مهارت ها را در یک پروژه حرفه ای به کار نبرده ام، اما به توانایی های خود اطمینان دارم و مشتاق شروع کار آزاد هستم. من فعالانه به دنبال فرصت هایی هستم که بتوانم از مهارت های خود استفاده کنم و در پروژه های معنادار مشارکت کنم.
                
                
                
                
                  </h6>
                <p className="card-text"> {teachersName}</p>
                <a
                    href="https://toplearn.com/courses/2208/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%85%D8%B9-react-js"
                    className="btn btn-primary"
                >
                رزومه من
                </a>
            </div>
            <div className="card-footer text-muted">
                      
            </div>
        </div>
    );
};

export default About;
