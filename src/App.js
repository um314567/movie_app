import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import './App.css';

// Class Component
class App extends React.Component {
  constructor(props) {
    // Inherited from parent class explicitly
    super(props);
    // Insert data what you gonna deal with
    this.state = {
      isLoading: true,
      movies: [],
    };
  }
  async getMovies() {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // 즉시 실행되는 함수가 아니라 내부에 실행이 완료되기까지 딜레이가 필요한 명령이 있는 함수의 경우, async 키워드로 비동기 함수임을 명시
    // axios.get(...)은 완료되기까지 시간이 필요한 명령이기 때문에 await 키워드로 기다림을 표시함
    console.log(movies);
    this.setState({movies: movies, isLoading: false});
  }
  componentDidMount() {
    console.log('componentDidMount(): ', 'Component mounted');
    this.getMovies();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate(): ', 'Component updated');
  }
  render() {
    console.log('render(): ', 'Rendering now...');
    const {isLoading, movies} = this.state;
    console.log('On loading: ', isLoading);
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <div className='loader__object'></div>
          </div>
        ) : (
          <div className='movies'>
            {movies.map(movie => {
              console.log(movie);
              return (
                <Movie
                  // id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
      // <div>
      //   <h1>I am a class component</h1>
      //   <p>The number is {this.state.count}</p>
      //   <button onClick={this.add}>PLUS {String.fromCharCode(43)}</button>
      //   <button onClick={this.minus}>MINUS {String.fromCharCode(8722)}</button>
      // </div>
    );
  }
}

export default App;

/*
function Movie({genre}) {
  return <p>Genre : {genre}</p>;
}

function Food(props) {
  return <p>Name : {props.name}</p>;
}

function Spec(props) {
  // props === { lang, img }
  // props는 Component 즉, <CompName key1="value" key2="value"... />에 작성된 key-value들로 구성된 객체
  console.log(props);
  return (
    // 항상 단일 태그는 "/>"로 마무리 해주세요. ( <img> => <img/> )
    <div>
      <img src={props.img.src} alt={props.img.alt} width={props.img.width} />
      <h3>Spec : {props.lang}</h3>
    </div>
  );
}

function renderSpecs(skill) {
  return <Spec lang={skill.lang} img={skill.img} />;
}

let skills = [
  {
    id: 1,
    lang: 'JS/ES6+',
    img: {
      src: 'https://source.unsplash.com/random',
      alt: 'skill',
      width: '160px',
    },
    rating: 3.5,
  },
  {
    id: 2,
    lang: 'HTML5/PUG',
    img: {
      src: 'https://source.unsplash.com/random',
      alt: 'skill',
      width: '160px',
    },
    rating: 4.0,
  },
  {
    id: 3,
    lang: 'CSS3/SCSS',
    img: {
      src: 'https://source.unsplash.com/random',
      alt: 'skill',
      width: '160px',
    },
    rating: 4.5,
  },
  {
    id: 4,
    lang: 'REACT.JS',
    img: {
      src: 'https://source.unsplash.com/random',
      alt: 'skill',
      width: '160px',
    },
    rating: 3,
  },
  {
    id: 5,
    lang: 'NODE.JS',
    img: {
      src: 'https://source.unsplash.com/random',
      alt: 'skill',
      width: '160px',
    },
    rating: 2,
  },
];
*/

/*
  add = () => {
    console.log('plus');
    // only read initial values first time and mutates the value in other variable
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log('minus');
    this.setState(current => ({count: current.count - 1}));
  };
  componentWillMount() {
    console.log('componentWillMount(): ', 'Component will be mounted');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate(): ', 'Component will be updated');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount(): ', 'Component unmounted');
  }
*/
