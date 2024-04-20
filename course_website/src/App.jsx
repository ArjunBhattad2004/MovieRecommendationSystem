import './App.css'
import ProjectPage from './components/ProjectPage';

function App() {

  const allReferences =[
    { author:"Serrano.Academy (2018)." , description:"How does Netflix recommend movies? Matrix Factorization" , link:"https://www.youtube.com/watch?v=ZspR5PZemcs"},
    { author:"Al Bakri, Nadia & Hashem, Soukaena. (2019)." , description:"Collaborative Filtering Recommendation Model Based on k-means Clustering. Al-Nahrain Journal of Science. 22. 74-79. 10.22401/ANJS.22.1.10.", link:"https://www.researchgate.net/publication/332579725_Collaborative_Filtering_Recommendation_Model_Based_on_k-means_Clustering"},
    { author:"Jackson Wu(2019)." , description:"Improving Collaborative Filtering With Clustering", link:"https://medium.com/@jwu2/improving-collaborative-filtering-with-clustering-88c63bdae7cc"},
    { author:"Ramya Vidiyala(2020)." , description:"How to Build a Movie Recommendation System",link:"https://towardsdatascience.com/how-to-build-a-movie-recommendation-system-67e321339109"},
    { author:"Sciforce(2021)." , description:"Deep Learning Based Recommender Systems",link:"https://medium.com/sciforce/deep-learning-based-recommender-systems-b61a5ddd5456"},
    { author:"Shuai Zhang, Lina Yao, Aixin Sun, and Yi Tay. 2018." , description:"Deep Learning based Recommender System: A Survey and New Perspectives. ACM Comput. Surv. 1, 1, Article 1 (July 2018), 35 pages. DOI: 0000001.0000001" , link:"https://arxiv.org/pdf/1707.07435.pdf"}
  ]
  
  const projectDescription = "Movie recommendation systems have become integral parts of modern streaming platforms, aiding users in discovering content tailored to their preferences. In this project, we present a hybrid recommendation system that combines collaborative and content-based filtering techniques to enhance movie recommendations. Collaborative filtering leverages user-item interaction data to identify similar users and recommend items based on their preferences, while content-based filtering analyzes movie attributes to suggest items with similar characteristics. By integrating these approaches, our system provides personalized recommendations that consider both user preferences and movie features. We implement and evaluate the system using a dataset comprising user ratings and movie metadata. Our results demonstrate the effectiveness of the hybrid approach in enhancing recommendation quality compared to individual filtering methods, showcasing its potential for improving user satisfaction and engagement in movie recommendation applications.";
  
  const problemDescription = "The challenge lies in developing an accurate movie recommendation system that can effectively cater to diverse user preferences. Traditional recommendation systems often rely solely on either collaborative filtering, which considers user-item interactions, or content-based filtering, which analyzes movie attributes. However, these approaches may overlook crucial aspects of user preferences or movie features, leading to suboptimal recommendations."
  
  const solutionDescription = "In our project, we tackle this problem by employing collaborative, content-based and hybrid filtering techniques. Collaborative filtering analyzes user-item interaction data to identify similar users and recommend movies based on their preferences. Meanwhile, content-based filtering examines movie attributes to suggest items with similar characteristics. By applying both filtering methods, we aim to provide a more comprehensive range of recommendations that cater to different aspects of user preferences and movie features, thereby enhancing the overall quality and relevance of movie recommendations."

  const videoId = "v90un9ALRzw";

  return (
    <>
      <ProjectPage allReferences={allReferences} projectDescription={projectDescription} solutionDescription={solutionDescription} problemDescription={problemDescription}  videoId={videoId}/>
    </>
  );
}

export default App;