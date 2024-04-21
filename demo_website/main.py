import pickle
import streamlit as st
import requests
from sklearn.metrics.pairwise import cosine_similarity

print(python.__version__)
def fetch_poster(movie_id):
    url = "https://api.themoviedb.org/3/movie/{}?api_key=d3c4bc3d77d23d1f7650d02f90a06567&language=en-US".format(movie_id)
    data = requests.get(url)
    data = data.json()
    # print(data)
    poster_path = data['poster_path']
    full_path = "https://image.tmdb.org/t/p/w500/" + poster_path
    return full_path

def recommend(movie):
    index = movies[movies['title'] == movie].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_movie_names = []
    recommended_movie_posters = []
    for i in distances[1:6]:
        # fetch the movie poster
        movie_id = main.iloc[i[0]].tmdbId
        # print(movie_id)
        # tmdbId = int(links.iloc[movie_id].tmdbId)
        recommended_movie_posters.append(fetch_poster(movie_id))
        recommended_movie_names.append(movies.iloc[i[0]].title)

    return recommended_movie_names,recommended_movie_posters

st.set_page_config(layout="wide")


st.header('Movie Recommender System')
movies = pickle.load(open('movies.pkl','rb'))
vector = pickle.load(open('vector.pkl','rb'))
links = pickle.load(open('links.pkl','rb'))
main = pickle.load(open('main.pkl','rb'))
similarity = cosine_similarity(vector)

movie_list = movies['title'].values
selected_movie = st.selectbox(
    "Type or select a movie from the dropdown",
    movie_list
)

if st.button('Show Recommendation'):
    recommended_movie_names,recommended_movie_posters = recommend(selected_movie)
    col1, col2, col3, col4, col5 = st.columns((2, 2, 2, 2, 2), gap="large")
    with col1:
        st.text(recommended_movie_names[0])
        st.image(recommended_movie_posters[0])
    with col2:
        st.text(recommended_movie_names[1])
        st.image(recommended_movie_posters[1])

    with col3:
        st.text(recommended_movie_names[2])
        st.image(recommended_movie_posters[2])
    with col4:
        st.text(recommended_movie_names[3])
        st.image(recommended_movie_posters[3])
    with col5:
        st.text(recommended_movie_names[4])
        st.image(recommended_movie_posters[4])


# col1, col2 = st.columns(2)
# with col1:
#         st.link_button("GitHub", "https://github.com/sahaniaditya/MovieRecommendationSystem")
#         st.link_button("Website", "https://github.com/sahaniaditya/MovieRecommendationSystem")
        

# st.caption('This is a string that explains something above.')

footer="""<style>
a:link , a:visited{
color: blue;
background-color: black;
text-decoration: underline;
}

a:hover,  a:active {
color: red;
background-color: transparent;
text-decoration: underline;
}

.footer {
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: black;
color: lightgray;
text-align: center;
}
</style>
<div class="footer">
<p> <a style='display: inline-block; text-align: center; color : gray;font-size : 20px;' href="https://github.com/sahaniaditya/MovieRecommendationSystem" target="_blank">GitHub</a> | <a style='display: inline-block; text-align: center; color : gray;font-size : 20px;' href="https://prmlproject.netlify.app/" target="_blank">Website</a> | <a style='display: inline-block; text-align: center; color : gray;font-size : 20px;' href="https://drive.google.com/file/d/1Gp-CGb7ZDTJkOTm91Nl3ND4mnYrbtArJ/view?usp=sharing" target="_blank">Document</a>
<br>
Developed by Aditya, Raunak, Krishna and Arjun
</p>
</div>
"""
st.markdown(footer,unsafe_allow_html=True)