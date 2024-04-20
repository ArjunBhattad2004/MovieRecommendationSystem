import React from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import aditya from "./images/team_member_1.jpg"
import arjun from "./images/team_member_2.jpg"
import raunak  from "./images/team_member_3.jpg"
import krishna from "./images/team_member_4.jpg"
import report from "./images/researchPaper.jpg"
import image4 from "./images/image4.png"
import demo from "./images/demo.jpg"
export default function ProjectPage(props) {
    const members = [
        { name: 'Aditya Sahani', imgSrc: aditya },
        { name: 'Arjun Bhattad', imgSrc: arjun },
        { name: 'Raunak Singh', imgSrc: raunak },
        { name: 'Krishna Chaudhary', imgSrc: krishna}
    ];
    const projectDescription = "Movie recommendation systems have become integral parts of modern streaming platforms, aiding users in discovering content tailored to their preferences. In this project, we present a hybrid recommendation system that combines collaborative and content-based filtering techniques to enhance movie recommendations. Collaborative filtering leverages user-item interaction data to identify similar users and recommend items based on their preferences, while content-based filtering analyzes movie attributes to suggest items with similar characteristics. By integrating these approaches, our system provides personalized recommendations that consider both user preferences and movie features. We implement and evaluate the system using a dataset comprising user ratings and movie metadata. Our results demonstrate the effectiveness of the hybrid approach in enhancing recommendation quality compared to individual filtering methods, showcasing its potential for improving user satisfaction and engagement in movie recommendation applications.";

    const problemDescription = "The challenge lies in developing an accurate movie recommendation system that can effectively cater to diverse user preferences. Traditional recommendation systems often rely solely on either collaborative filtering, which considers user-item interactions, or content-based filtering, which analyzes movie attributes. However, these approaches may overlook crucial aspects of user preferences or movie features, leading to suboptimal recommendations."

    const solutionDescription = "In our project, we tackle this problem by employing collaborative, content-based and hybrid filtering techniques. Collaborative filtering analyzes user-item interaction data to identify similar users and recommend movies based on their preferences. Meanwhile, content-based filtering examines movie attributes to suggest items with similar characteristics. By applying both filtering methods, we aim to provide a more comprehensive range of recommendations that cater to different aspects of user preferences and movie features, thereby enhancing the overall quality and relevance of movie recommendations."

    const videoId = "v90un9ALRzw";

    return (
        // Course Website heading added
        <div className="container mx-auto text-center font-serif">
            <p className="mb-10 text-6xl font-bold">Movie Recommendation System</p>
            <div className="links mb-10 text-2xl">
                <span><a href="#paper">Report</a> | </span>
                <span><a href="https://github.com/sahaniaditya/MovieRecommendationSystem">Code</a> | </span>
                <span><a href="https://github.com/sahaniaditya/MovieRecommendationSystem/tree/main/dataset">Dataset</a> | </span>
                <span><a href="https://github.com/sahaniaditya/MovieRecommendationSystem/tree/main/demo_website">Demonstration</a></span>
            </div>
            {/* Carousel added */}
            <div className="carousel-container border border-gray-300 rounded-lg overflow-hidden h-30 mb-8">
                <Carousel showThumbs={false} transitionTime={1000} showStatus={false} infiniteLoop={true} autoPlay={true}
                >
                    <div>
                        <img
                            className="block w-full pb-12"
                            src={demo}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img
                            className="block w-full"
                            src={image4}
                            alt="Second slide"
                        />
                    </div>
                </Carousel>
            </div>
            {/* Carousel ended */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left ">
                <div className="description mb-8">
                    <h2 className="text-2xl font-bold mb-4">Abstract</h2>
                    <p>{projectDescription}</p>
                </div>
                <div className="video-container mb-8 text-center">
                    <h2 className="text-2xl font-bold mb-4 ">Spotlight Video</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <YouTube videoId={videoId} />
                    </div>
                </div>
            </div>

            <div className="problem-statement text-left mb-8">
                <h2 className="text-4xl font-bold mb-4">Problem Description</h2>
                <div className="border mb-5">
                    <img
                    className="block w-full"
                    src={image4}
                    alt="problemStatement"
                    />
                </div>
                <p>{problemDescription}</p>
                <p className="my-5">{solutionDescription}</p>
            </div>

            <p className='text-left text-3xl mb-6 font-bold'>Report</p>

            <div className="flex items-center justify-center">
                <div className="max-w-screen-lg bg-gray-100 rounded-lg shadow-lg p-8 flex">
                    <div className="flex flex-col justify-center ">
                        <h2 className="text-xl font-semibold mb-4">A Movie Recommendation system using content and collaborative based filtering</h2>
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                        <div className="relative h-64 w-64">
                            <img
                            src={report}
                            alt="Report"
                            className="object-contain w-full h-full rounded-lg"
                            />
                        </div>
                    
                        <div className="bg-white p-4 rounded-b-lg mt-2">
                            <a className="text-lg font-semibold">[Report]</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="members mb-8 text-left my-10">
              <p className="mb-10 text-3xl font-bold">Team</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {members.map((member, index) => (
                        <div key={index} className="text-center  ">
                            <div className="bg-white rounded-lg shadow-md p-4 border">
                                <img src={member.imgSrc} alt={member.name} className="w-36 h-36 mx-auto mb-5 rounded-full" />
                                <p className="mb-1">{member.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}