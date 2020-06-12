<template>
    <el-row type="flex" justify="center">
        <el-col :span="20">
            <nav_home></nav_home>
            <h3 style="margin-top: 3rem;" class="truncate">{{courses[course_id].title}}</h3>
            <div class="main">
                
                <div class="main-info">
                    
                    <div class="course-main">

                        <div class="course-image">

                            <img :src="courses[course_id].url">

                        </div>

                    </div>
                    <div class="course-info">

                        <h6>{{courses[course_id].info}}</h6>
                        <h5 class="truncate">Video courses</h5>

                    </div>
                    
                    <div class="row video-course">

                        <div class="courses-row">

                            <div v-for="(card, index) in courses[course_id].videoCourses" :key="index" class="course-card">

                                <div class="card-image">
                                    <button class="routeBtn" @click="routeBtn(card.url)"><img :src="card.img"></button>
                                </div>

                                <div class="video-course-description">
                                    <p>{{card.description}}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div class="secondary-info">

                    <div class="row">
                        <div class="col">
                            <div v-for="(course, index) in courses[course_id].courseList" :key="index" class="card">
                                <div class="card-image">
                                    <img :src="course.img">
                                </div>
                                <div class="card-content">
                                    <p>{{course.description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <foot_contact></foot_contact>
        </el-col>
    </el-row>
</template>

<script>
    import nav_home from '../components/home/nav_home.vue'
    import foot_contact from '../components/home/foot_contact.vue';

    document.addEventListener('DOMContentLoaded', function() {
        var options = {
            inDuration : 275,
            outDuration : 200,
            onOpenStart : null,
            onOpenEnd : null,
            onCloseStart : null,
            onCloseEnd : null
        }

        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems, options);
    });
export default {
    
    name: "Course",
    components:{
    nav_home,
    foot_contact
    },
    data:()=>({
        course_id : null,
        courses : [
            {
                title : "Listening",
                subtitle : "This course for you!",
                info : "\tHere you can find activities to practise your listening skills. Listening will help you to improve your understanding of the language and your pronunciation.\n\tThe self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are recordings of different situations and interactive exercises that practise the listening skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The speakers you will hear are of different nationalities and the recordings are designed to show how English is being used in the world today.\n\tTake our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your listening skills at your own speed, whenever it's convenient for you.",
                url : "https://digitalpianoexpert.org/wp-content/uploads/2018/11/actor-adult-back-view-374832.jpg",
                courseList: [
                    {
                        description: 'Here you can find activities to practise your listening skills. Listening will help you to improve your understanding of the language and your pronunciation.',
                        img: 'https://lh3.googleusercontent.com/v7-jiT_DMEhyQj_162TDvbcAAk-2zrGCvewm6e5Bs7rquvPzcluehVHBRRDEKBtByA'
                    },
                    {
                        description: 'The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).',
                        img: 'https://static-s.aa-cdn.net/img/gp/20600013123842/lQlfq1DLhlqjz70wgimmSuezBeiKXHJviimhWnArUGkJBJ-nimFVZquS_mT89DST3w=s300?v=1'
                    }
                ],
                videoCourses: [
                    {
                        img: 'https://i.ytimg.com/vi/DJb6N2EXNtQ/maxresdefault.jpg',
                        description: 'Hello guys. Welcome back our Heaven Luk learning channel. After a long time, We are back with a new video. In this video you all the Beginner guys can improve Spoken English and Also improve English Listening Skills through video. This English Listening ',
                        url: 'https://www.youtube.com/watch?v=DJb6N2EXNtQ'
                    },
                    {
                        img: 'https://i.ytimg.com/vi/PSfQMCRjAlo/maxresdefault.jpg',
                        description: 'This video describes in detail all the tasks that are similar in logic and strategy to note-completion tasks. These tasks are form-completion, table-completion, and sentence completion. After the examples, a 6-step strategy is proposed that you should follow in order to help you during your IELTS listening practice and preparation. Turn the video to HD to see the examples clearly.',
                        url: 'https://www.youtube.com/watch?v=PSfQMCRjAlo'
                    }
                ]
            },
            {
                title : "Reading",
                subtitle : "This course for you!",
                info : "Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.\
                        The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time.\
                        Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your reading skills at your own speed, whenever it's convenient for you.",
                url : "https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2015/07/how-to-improve-english-reading-skills.jpg",
                courseList: [
                    {
                        description: 'Are you a beginner (CEFR level A1) learner of English? This section offers reading practice to help you understand simple information, words and sentences about known topics.',
                        img: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/4/0/405206_3373396.jpg'
                    },
                    {
                        description: 'Each lesson has a preparation task, a reading text and two tasks to check your understanding and to practise a variety of reading skills.',
                        img: 'https://avatars.mds.yandex.net/get-marketpic/1708279/market_GZP0JXO1BuurzgsYDDvgrQ/orig'
                    }
                ],
                videoCourses: [
                    {
                        img: 'https://i.ytimg.com/vi/Kd-mWHBI9po/maxresdefault.jpg',
                        description: 'This video introduces sight words, words build with vowels as well as sentences in a very interactive way.  Each slide starts with a spacial awareness exercise.  Each child will have their own reading book ready to read.  Teacher can pause the video after each slide of reading words and ',
                        url: 'https://www.youtube.com/watch?v=Kd-mWHBI9po'
                    },
                    {
                        img: 'https://i.ytimg.com/vi/NzHVmX1pnc8/maxresdefault.jpg',
                        description: 'The Sounds of English, a FREE, comprehensive series of 12 videos, teaches phonics and pronunciation to non-native and beginning native learners of English. Learn to spell, read and pronounce English like native speakers with these easy lessons. Great for self-study, or the whole family! Build confidence and get fluent faster!',
                        url: 'https://www.youtube.com/watch?v=NzHVmX1pnc8'
                    }
                ]
            },
            {
                title : "Writing",
                subtitle : "This course for you!",
                info : "Here you can find activities to practise your writing skills. You can improve your writing by understanding model texts and how they're structured.\
                        The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of model texts, with writing tips and interactive exercises that practise the writing skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time.\
                        Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your writing skills at your own speed, whenever it's convenient for you.",
                url : "https://st2.depositphotos.com/8956756/11886/i/950/depositphotos_118866746-stock-photo-young-teacher-writing-english-grammar.jpg",
                courseList: [
                    {
                        description: 'Are you a beginner (CEFR level A1) learner of English? This section offers writing practice to help you write short, simple texts about known topics and fill in forms.',
                        img: 'https://www.wikihow.com/images/thumb/4/4d/Improve-Written-English-Step-13.jpg/aid7598839-v4-728px-Improve-Written-English-Step-13.jpg.webp'
                    },
                    {
                        description: 'Are you a pre-intermediate (CEFR level A2) learner of English? This section offers writing practice to help you write short, simple texts, notes and messages. ',
                        img: 'https://img-a.udemycdn.com/course/750x422/455708_34c9_3.jpg'
                    }
                ],
                videoCourses: [
                    {
                        img: 'https://i.ytimg.com/vi/jRmSP7bE2uU/maxresdefault.jpg',
                        description: 'Practice English handwriting with this simple video. Each letter  is carefully written to show students the proper stroke order of the English alphabet.',
                        url: 'https://www.youtube.com/watch?v=jRmSP7bE2uU'
                    },
                    {
                        img: 'https://i.ytimg.com/vi/n6_Gg_1riow/maxresdefault.jpg',
                        description: 'You might have some special moments which you want to keep it remembered forever then what you do? You should note down them in diary date wise. Diary writing is indeed a good way to keep the things remembered. Watch the whole video to learn the way of Diary writing.',
                        url: 'https://www.youtube.com/watch?v=n6_Gg_1riow'
                    }
                ]
            },
            {
                title : "Speaking",
                subtitle : "This course for you!",
                info : "Here you can find activities to practise your speaking skills. You can watch and listen to videos that show how English is used in different types of conversations. As you listen and speak aloud, you’ll also improve your pronunciation.\
                        The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). The videos and interactive exercises help you to practise your speaking skills.\
                        Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your speaking skills at your own speed, whenever it's convenient for you.",
                url : "https://miro.medium.com/max/1400/1*2cLJVbjnO4VgdAgETlTEOQ.png",
                courseList: [
                    {
                        description: 'Improve your knowledge of the English language and pronunciation and practice your speaking and vocabulary with our video lessons.',
                        img: 'https://basicenglishspeaking.com/wp-content/uploads/2018/03/speak-fluently.png'
                    },
                    {
                        description: 'Change course at any time with our self-paced learning system. Your free Online English Course is ready for you now.',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSUDqQoNaT1pDi45fhLrAri9e9DpadZnuzrRIR24kLMuFZ9y_4&usqp=CAU'
                    }
                ],
                videoCourses: [
                    {
                        img: 'https://i.ytimg.com/vi/RQDm8kpIqTM/maxresdefault.jpg',
                        description: 'This video lets you know my strategy of making FREE Online English Speaking Course videos for basic as well as advance learners.',
                        url: 'https://www.youtube.com/watch?v=RQDm8kpIqTM'
                    },
                    {
                        img: 'https://i.ytimg.com/vi/eF7nRqKi8CU/maxresdefault.jpg',
                        description: 'This application contains all English grammar topics for all levels and lots of English grammar practice where you can improve your English grammar step by step. The author of this application has a PhD and an international qualification from Cambridge University (CELTA) which allows him to teach English all over the world in English. This application will help you to speak English without any mistakes at all and be more confident during your English conversation, too.',
                        url: 'https://www.youtube.com/watch?v=eF7nRqKi8CU'
                    }
                ]
            }
        ]
    }),
    methods: {
        routeBtn(url) {
            window.location = url
        }
    },
    created() {
      if (!localStorage.token) {
        this.$router.push('/register')
      }
      this.course_id = this.$route.query.id
    }
}
</script>

<style lang="scss" scoped>
    .main{
        display: flex;
        .main-info{
            width: 75%;
            padding-right: 2rem;
            .course-main{
                display: flex;
                .course-image{
                    width: 100%;
                    padding-top: 3rem;
                    img{
                        width: 100%;
                    }
                }
                .truncate{
                    padding-top: 3rem;
                    padding-bottom: 3rem;
                    padding-left: 1rem;
                }
            }
            .course-info {
                display: block;
                white-space: pre-wrap;
                h6 {
                    font-family: 'Gill Sans';
                    font-size: 1.25rem;
                    line-height: 1.8rem;
                }
            }
            .row{
                padding-top: 1rem;
            }
        }
        .secondary-info{
            width: 25%;
            padding-top: 3rem;
            .row{
                .col{
                    width: 100%;
                    .card{
                        margin-top: 0;
                        .card-content{
                            p{
                                font-size: 1.25rem;
                                font-family: 'Gill Sans';
                                line-height: 1.8rem;
                            }
                        }

                    }
                }   
            }
        }
        .video-course {
            display: flex;
            .course-card {
                margin-left: 0;
                padding: 0;
            }
            .video-course-description {
                padding-left: 1.5rem;
                width: 70%;
                p {
                    font-size: 1.25rem;
                    font-family: 'Gill Sans';
                    line-height: 1.8rem;
                }
            }
        }
    }
    .card-image {
        img {
            width: 100%;
            max-width: 20rem;
        }
    }
    .course-card {
        display: flex;
        width: 100%;
        margin-bottom: 1.5rem;
    }
    .routeBtn {
        cursor: pointer;
    }
    @media (max-width: 992px) {
        .main {
            flex-direction: column;
            .main-info {
                width: 100%;
                padding-right: 0;
            }
            .secondary-info { 
                width: 100%;
                .row { 
                    .col {
                        display: flex;
                        justify-content: space-between;
                        .card {
                            width: 48%;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        .video-course {
            flex-direction: column;
            .course-card {
                width: 100%;
            }
        }
        .video-course-description {
            margin-top: 1rem;
            padding-left: 0 !important;
            width: 100% !important;
        }
    }
    @media (max-width: 480px) {
            .secondary-info { 
                .row { 
                    .col {
                        display: flex;
                        justify-content: flex-start;
                        flex-direction: column;
                        .card {
                            width: 100% !important;
                        }
                    }
                }
            }
    }
</style>