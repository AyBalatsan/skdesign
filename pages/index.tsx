import type { NextPage } from 'next'
import { useForm } from "react-hook-form";
import Link from 'next/link'
import styled from 'styled-components'
import InputDefault from '../ui/ForForm/input/InputDefault'
import SelectDefault, {SelectForDataString} from '../ui/ForForm/select/SelectDefault'
import dataCities from '../data/cities.json'
import dataSources from '../data/sources.json'
import ButtonDefault from '../ui/Button/ButtonDefault'

const inputList = [
  {id: 'nameField',
    placeholder: 'Иван',
    label: 'Ваше имя *',
    type: 'text',
    req: {
      required: 'Поле объязательно',
      minLength: {
        value: 2,
        message: `минимум 2 символов.`
      },
      maxLength: {
        value: 12,
        message: `максимум 12 символов.`
      },
      
    }
  },
  {id: 'phoneField', placeholder: '+7 (000) 000-00-00', label: 'Номер телефона *', type: 'text', 
    req: {
      required: 'Поле объязательно к заполнению',
      minLength: {
        value: 2,
        message: `минимум 5 символов.`
      },
      maxLength: {
        value: 12,
        message: `максимум 11 символов.`
      },
      pattern: "+7-[0-9]{3}-[0-9]{3}"
    }
  },
  {id: 'emailField', placeholder: 'example@skdesign.ru', label: 'E-mail *', type: 'text', 
    req: {
      required: 'Поле объязательно к заполнению',
      minLength: {
        value: 2,
        message: `минимум 2 символов.`
      },
      maxLength: {
        value: 12,
        message: `максимум 12 символов.`
      },
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    }
  },
  {id: 'linkForProfileField', placeholder: 'instagram.com/skde…', label: 'Ссылка на профиль *', type: 'text', 
    req: {
      required: 'Поле объязательно к заполнению',
      minLength: {
        value: 2,
        message: `минимум 2 символов.`
      },
      maxLength: {
        value: 12,
        message: `максимум 12 символов.`
      },
    }
  },
]
const Home: NextPage = () => {
  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  })  
  const onSubmit = (data:any) => {
    setTimeout(() => {
      alert(JSON.stringify(data))
      reset()
    }, 2000)    
  }
  return (
      <section>
        <h1 className="visually-hidden">Сотрудничество и дизайн интерьера</h1>
        <Wrapper className="wrapper">
          <div className="container">
            <Shell>
              <Description>
                <svg width="475" height="71" viewBox="0 0 475 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.03677 55.5995C3.53753 56.8859 5.25268 58.0651 7.50383 59.1371C9.64779 60.209 12.0061 60.9594 14.5789 61.6026C17.5804 62.2458 20.2604 62.5674 22.8331 62.5674C26.049 62.5674 29.0506 62.1386 31.7305 61.1738C34.4104 60.3162 36.4472 59.0299 38.0552 57.3147C39.6631 55.4923 40.4135 53.5628 40.4135 51.3116C40.4135 48.5245 39.1271 46.2733 36.5544 44.5582C33.9817 42.843 29.801 41.5566 24.2267 40.5919L18.8668 39.6271C12.6493 38.5551 7.93264 36.4112 4.71671 33.4096C1.60797 30.4081 0 26.549 0 21.7251C0 17.7588 1.07198 14.3284 3.32313 11.2197C5.46709 8.11098 8.68301 5.75262 12.6493 4.03746C16.6156 2.3223 21.1179 1.46472 26.1562 1.46472H27.7642C34.0889 1.67912 39.8775 3.07268 45.2374 5.64542L44.9158 14.8644C38.9128 11.3269 32.8025 9.50455 26.3706 9.50455C23.1547 9.50455 20.3676 9.93334 17.7948 10.8981C15.2221 11.7557 13.1853 13.1493 11.6846 14.7572C10.0766 16.5796 9.32619 18.6164 9.32619 20.8675C9.32619 23.6546 10.5054 25.9058 12.8637 27.6209C15.2221 29.3361 19.0812 30.6225 24.4411 31.5873L29.1578 32.3376C36.1256 33.5168 41.2711 35.5536 44.7014 38.5551C48.1317 41.5566 49.8469 45.4158 49.8469 50.2397C49.8469 54.206 48.7749 57.6363 46.5238 60.745C44.2726 63.8538 41.0567 66.2121 36.9832 67.9273C32.9097 69.6424 28.3002 70.5 23.1547 70.5H21.7611C18.2236 70.3928 14.6861 69.8568 11.1486 68.892C7.61104 67.9273 4.28791 66.6409 1.39357 65.0329L2.03677 55.5995Z" fill="#353238" />
                  <path d="M219.541 61.7099H257.382L254.058 69.857H210.751V2.42963H256.738L253.415 10.5767H219.541V31.909H248.484L245.161 40.056H219.541V61.7099Z" fill="#353238" />
                  <path d="M265.314 55.5995C266.815 56.8859 268.53 58.0651 270.781 59.1371C272.925 60.209 275.284 60.9594 277.856 61.6026C280.858 62.2458 283.538 62.5674 286.111 62.5674C289.326 62.5674 292.328 62.1386 295.008 61.1738C297.688 60.3162 299.725 59.0299 301.333 57.3147C302.941 55.4923 303.691 53.5628 303.691 51.3116C303.691 48.5245 302.405 46.2733 299.832 44.5582C297.259 42.843 293.078 41.5566 287.504 40.5919L282.144 39.6271C275.927 38.5551 271.21 36.4112 267.994 33.4096C264.885 30.4081 263.277 26.549 263.277 21.7251C263.277 17.7588 264.349 14.3284 266.601 11.2197C268.745 8.11098 271.96 5.75262 275.927 4.03746C279.893 2.3223 284.395 1.46472 289.434 1.46472H291.042C297.366 1.67912 303.155 3.07268 308.515 5.64542L308.193 14.8644C302.19 11.3269 296.08 9.50455 289.648 9.50455C286.432 9.50455 283.645 9.93334 281.072 10.8981C278.5 11.7557 276.463 13.1493 274.962 14.7572C273.354 16.5796 272.604 18.6164 272.604 20.8675C272.604 23.6546 273.783 25.9058 276.141 27.6209C278.5 29.3361 282.359 30.6225 287.719 31.5873L292.435 32.3376C299.403 33.5168 304.549 35.5536 307.979 38.5551C311.409 41.5566 313.124 45.4158 313.124 50.2397C313.124 54.206 312.052 57.6363 309.801 60.745C307.55 63.8538 304.334 66.2121 300.261 67.9273C296.187 69.6424 291.578 70.5 286.432 70.5H285.039C281.501 70.3928 277.964 69.8568 274.426 68.892C270.888 67.9273 267.565 66.6409 264.671 65.0329L265.314 55.5995Z" fill="#353238" />
                  <path d="M324.916 5.96704L333.599 2.64392V70.0712H324.916V5.96704Z" fill="#353238" />
                  <path d="M465.667 6.18152L474.457 2.8584V69.9641H466.095L425.253 17.0085V69.9641H416.463V2.5368H424.824L465.667 55.4924V6.18152Z" fill="#353238" />
                  <path d="M395.881 17.9732C393.523 15.5076 390.843 13.6853 387.734 12.3989C384.625 11.1125 381.302 10.4693 377.872 10.4693C373.155 10.4693 368.867 11.5413 365.008 13.7925C361.149 16.0436 358.04 19.1524 355.789 23.2259C353.538 27.1922 352.466 31.5873 352.466 36.5184C352.466 41.3423 353.538 45.6302 355.575 49.5965C357.611 53.4556 360.613 56.5643 364.365 58.8155C368.224 61.0666 372.405 62.1386 376.907 62.1386C383.446 62.1386 388.592 60.4234 392.558 56.9931C396.417 53.5628 398.775 48.7389 399.418 42.307H373.369L377.336 38.0191C379.373 35.8752 382.16 34.5888 385.054 34.5888H408.53V35.9824C408.53 42.4142 407.244 48.0957 404.671 53.2412C402.098 58.3867 398.454 62.353 393.737 65.3545C389.02 68.3561 383.339 69.8568 376.8 69.8568C370.797 69.8568 365.33 68.4633 360.291 65.7833C355.253 62.9962 351.18 59.2443 348.178 54.4204C345.069 49.3821 343.461 43.379 343.461 36.5184C343.461 30.1937 344.962 24.405 347.856 19.2596C350.751 14.1141 354.931 9.93335 360.291 7.03901C365.651 4.03748 371.44 2.64392 377.872 2.64392C382.696 2.64392 387.198 3.50149 391.379 5.10945C395.345 6.71742 398.775 8.96857 401.777 11.8629L395.881 17.9732Z" fill="#353238" />
                  <path d="M111.7 69.9641L78.683 33.7313L108.806 2.00076H102.481C99.4794 2.00076 96.585 3.28713 94.5483 5.43108L67.9633 34.0529V0.5L59.2803 3.82312V69.9641H67.9633V44.8798L72.7872 39.9487L96.6922 66.4266C98.729 68.6777 101.516 69.8569 104.518 69.8569H111.7V69.9641Z" fill="#353238" />
                  <path d="M144.931 49.275V10.6839H164.87C171.409 10.6839 176.662 12.2918 180.628 15.2933L186.524 8.86149C185.345 8.0039 184.166 7.25352 182.879 6.50314C177.841 3.8232 171.838 2.42963 164.87 2.42963H136.141V64.2827L141.394 58.494C143.645 56.0285 144.931 52.7053 144.931 49.275Z" fill="#0086A8" />
                  <path d="M192.527 15.1862L186.202 22.154C188.025 25.9059 188.989 30.6226 188.989 36.0897C188.989 44.3439 186.846 50.5614 182.665 54.9565C178.484 59.3516 172.481 61.6027 164.763 61.6027H155.544C152.221 61.6027 149.005 62.9963 146.754 65.4618L142.787 69.7498H164.656C171.623 69.7498 177.627 68.3562 182.772 65.569C187.81 62.7819 191.562 58.9228 194.242 53.7773C196.922 48.739 198.208 42.7359 198.208 35.9825C198.208 29.1218 196.922 23.226 194.242 18.1877C193.813 17.2229 193.17 16.1509 192.527 15.1862Z" fill="#353238" />
                </svg>
                <Title>Оставьте заявку и станьте частью нашей команды</Title>
                <BlockWithText>
                  <p>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.</p>
                  <p>Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.</p>
                  <p>Ознакомиться с проектами можете в нашем
                    <Link href='/portfolio'>
                      <a className="link"> портфолио</a>
                    </Link>
                    . Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.</p>
                </BlockWithText>
              </Description>
              <Form action="#" onSubmit={handleSubmit(onSubmit)}>
                <ShellGrid>
                  {inputList.map(input =>{
                    return(
                      <InputDefault 
                          key={input.id}
                          id={input.id}
                          placeholder={input.placeholder}
                          label={input.label}
                          type={input.type}
                          req={input.req}                          
                          validationSettings={{register, errors}}
                        />           
                    )
                  })}
                </ShellGrid>  
                <SelectDefault id='cityId' name='cityFiled' titleDefault='Выберите город *' validationSettings={{register, errors}} req={true} data={dataCities} />
                  <InputDefault 
                    id='organization'
                    placeholder='SK Design'
                    label='Название организации/студии'
                    type='text'
                    validationSettings={{register, errors}}
                    req={null}
                  />     
                <ButtonToggle>
                  <span>Скрыть дополнительные поля</span>
                  <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_2030)">
                      <path d="M5.82835 7.68702L9.8853 3.6385C10.038 3.48608 10.0383 3.23876 9.88587 3.08608C9.73349 2.93336 9.48616 2.93311 9.33345 3.08549L5.2762 7.1343C5.1239 7.28661 4.87609 7.28661 4.72349 7.13401L0.666536 3.08549C0.513822 2.93311 0.266497 2.93336 0.114114 3.08608C0.0380201 3.16231 -5.72205e-06 3.26217 -5.72205e-06 3.362C-5.72205e-06 3.46209 0.0382347 3.56219 0.1147 3.6385L4.17136 7.68672C4.62827 8.14364 5.37173 8.14364 5.82835 7.68702Z" fill="#353238" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2030">
                        <rect width="10" height="10" fill="white" transform="translate(10 0.5) rotate(90)" />
                      </clipPath>
                    </defs>
                  </svg>
                </ButtonToggle>
                <ToggleBlock>
                    <InputDefault 
                      id='fio'
                      placeholder='ФИО'
                      label='Получатель'
                      type='text'
                      validationSettings={{register, errors}}
                      req={null}
                    />     
                  <SelectForDataString id='sourcesId' name='sourcesFiled' titleDefault='От куда узнали про нас?' req={false} data={dataSources} />
                </ToggleBlock>
                <ButtonDefault disabled={!isValid} title='Отправить заявку' onClick={handleSubmit(onSubmit)}/>
              </Form>
            </Shell>
          </div>
        </Wrapper>
      </section>
  )
}
const Title = styled.h2`
  font-family: 'SF UI Display';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #353238;
`
const BlockWithText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    a{
      color: #0086A8;
      cursor: pointer;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: 992px) {
    height: fit-content;
    padding-top: 40px;
  }
  @media (max-width: 540px) {
    svg{
      width: 100%;
    }
  }
`
const Shell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 940px;
  width: 100%;
  @media (max-width: 540px) {
    gap: 20px;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 440px;
  width: 100%;
  padding: 40px 30px;
  @media (max-width: 992px) {
    max-width: 100%;
    padding: 20px 0;
  }
`
const ShellGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
  gap: 20px;
  @media (max-width: 540px) {
    grid-template-columns: 12fr;
  }
`
const ToggleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

`
const ButtonToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 150%;
  color: #353238;
`

export default Home
