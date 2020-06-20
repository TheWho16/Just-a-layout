import React,{ useState }  from "react";
import ScrollHOC from "../hoc";

const Top = props => {
  let { Element } = props;
  const [userName, setUserName] = useState(''),
        [userMassage, setUserMassage] = useState(''),
        [userEmail, setUserEmail] = useState('');


  let eventCheck = (event)=>{
    console.log(event.target.name);
    if (event.target.name === "name"){
      setUserName(event.target.value)
    }
    if (event.target.name === "email"){
      setUserEmail(event.target.value)
    }
    if (event.target.name === "massage"){
      setUserMassage(event.target.value)
    }
  };

  let eventSubmmit = ()=>{
    console.log('lol');
    console.log('userName: '+ userName);
    console.log('userEmail: '+ userEmail);
    console.log('userMassage: '+ userMassage);
  }
       

  return (
    <>
      <div id="top">
        <h1>Typical</h1>
        <h3>Title</h3>
      </div>
      <Element name="main" className="element" id="main">
        
          <div className="intro">
            <h2>Наши услуги помогут вам</h2>
            <span>Большой выбор всего, что вам может пригодится</span>
          </div>
          <div className="text">
            <span>
              CPA-сеть выполняет роль посредника между веб-мастером и
              рекламодателем. Последний размещает офферы — партнёрские рекламные
              предложения, где указывает необходимое действие от потребителя
              (звонок, переход по ссылке, скачанное приложение и т.д). При
              регистрации на платформе веб-мастер подписывает партнерское
              соглашение и потом находит подходящее предложение. У сети уже
              подписан договор с рекламодателем. CPA-сеть берёт на себя функции
              по привлечению рекламодателей, по отбору подходящих для рекламы
              сайтов, а также учёт переходов по объявлениям, выплаты владельцам
              сайтов, иногда подготовку рекламных материалов и т.п
            </span>
          </div>
        
      </Element>
      <Element name="overviev" className="element" id="overviev">
      <div id="overviev">
        <h2>Преимущества</h2>
        <h4>С нами все проще</h4>
        <div className="img-wrapper">
          <div className="img">
            <img
              src="data:image/jpeg;base64,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"
              alt="someImg"
            />
            <span>Арбитраж трафика</span>
          </div>
          <div className="img">
            <img
              src="https://kakzarabativat.ru/wp-content/uploads/2017/01/Kontekstnaya-reklama.jpg"
              alt="someImg"
            />
            <span>Контекстная реклама</span>
          </div>
          <div className="img">
            <img
              src="https://webkuzniza.ru/wp-content/uploads/2019/04/optimization-context-advert.jpg"
              alt="someImg"
            />
            <span>Оптимизация контекстной рекламы</span>
          </div>
          <div className="img">
          <img
            src="https://webkuzniza.ru/wp-content/uploads/2019/04/optimization-context-advert.jpg"
            alt="someImg"
          />
          <span>Разработка фирменого стиля и логотипа</span>
        </div>
        </div>
      </div>
      </Element>
      <Element name="contacts" className="element" id="contacts">
      <div id="contacts">
        <center>
          <h5>Обратная связь</h5>
        </center>
        <form id="form_input" onSubmit={eventSubmmit}>
          <label for="name">
            Имя <span>*</span>
          </label>
          <input type="text"
           placeholder="Введите имя"
           name="name"
           id="name"
           required
           value={userName} onChange={eventCheck} 
          />         
          <br />
          <label for="email">
            Ваша почта<span>*</span>
          </label>
          <input
            type="email"
            placeholder="Введите email"
            name="email"
            id="email"
            required
            value={userEmail} onChange={eventCheck} 
          />
          <br />
          <label for="massage">
            Сообщение<span>*</span>
          </label>
          <input
            type="massage"
            placeholder="Введите ваше сообщение"
            name="massage"
            id="massage"
            required
            value={userMassage} onChange={eventCheck} 
          />
          <br />

          <input type="submit" value="Отправить" id="mess_send" className="btn"/>       
        </form>
      </div>
      </Element>
      <Element  name="faq" className="faq" id="faq">
     
        <div>
          <span className="title">Оплата</span>
          <br />
          <span className="heading">Как будет проходить оплата?</span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
          <span className="heading">Как будет проходить оплата?</span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
          <span className="heading">Как будет проходить оплата?</span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
        </div>
        <div>
          <span className="title">Информация</span>
          <br />
          <span className="heading">Что входит в услуги сервиса?</span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
          <span className="heading">Что входит в услуги сервиса?</span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
          <span className="heading">Что входит в услуги сервиса?</span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
        </div>
        <div>
          <span className="title">Гарантии</span>
          <br />
          <span className="heading">Какие гарантии есть ? </span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
          <span className="heading">Какие гарантии есть ?</span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
          <span className="heading">Какие гарантии есть ?</span>
          <p>
            CPA-сеть выполняет роль посредника между веб-мастером и
            рекламодателем. Последний размещает офферы — партнёрские рекламные
            предложения, где указывает необходимое действие от потребителя
            (звонок, переход по ссылке, скачанное приложение и т.д). При
            регистрации на платформе веб-мастер подписывает партнерское
            соглашение и потом находит подходящее предложение. У сети уже
            подписан договор с рекламодателем. CPA-сеть берёт на себя функции по
            привлечению рекламодателей, по отбору подходящих для рекламы сайтов,
            а также учёт переходов по объявлениям, выплаты владельцам сайтов,
            иногда подготовку рекламных материалов и т.п
          </p>
        </div>
      
      </Element>
    </>
  );
};

export default ScrollHOC(Top);
