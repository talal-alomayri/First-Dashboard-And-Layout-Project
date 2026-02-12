
import CardCoursesDesign from "./CardCoursesPage/CardCoursesDesign"

export default function CradCourses(){
    return(
       <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-3 mr-3 pb-3">
          <CardCoursesDesign Avatar={"/imgs/team-01.png"} Bg={"/imgs/course-01.jpg"}
          Header={"Mastering Web Design"}
          Text={"Master The Art Of Web Designing And Mocking, Prototyping And Cerating Web Design Architecture"}
          UsersNum={"950"} DollarsNum={"165"}/>

          <CardCoursesDesign Avatar={"/imgs/team-02.png"} Bg={"/imgs/course-02.jpg"}
          Header={" Data Structure And Algorithms"}
          Text={"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering"}
          UsersNum={"1150"} DollarsNum={"210"}/>

          <CardCoursesDesign Avatar={"/imgs/team-01.png"} Bg={"/imgs/course-03.jpg"}
          Header={"Responsive Web Design"}
          Text={"Mastering Responsive Web Designing And Media Queries And Know Everything About BreaKpoints"}
          UsersNum={"650"} DollarsNum={"90"}/>

          <CardCoursesDesign Avatar={"/imgs/team-03.png"} Bg={"/imgs/course-04.jpg"}
          Header={"Mastering Python"}
          Text={"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life"}
          UsersNum={"950"} DollarsNum={"250"}/>

          <CardCoursesDesign Avatar={"/imgs/team-03.png"} Bg={"/imgs/course-05.jpg"}
          Header={"PHP Examples"}
          Text={"PHP Tutorials And Examples And Practice On Web Application And Cooneting With Databases"}
          UsersNum={"850"} DollarsNum={"150"}/>

         <CardCoursesDesign Avatar={"/imgs/team-02.png"} Bg={"/imgs/course-02.jpg"}
          Header={" Data Structure And Algorithms"}
          Text={"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering"}
          UsersNum={"1150"} DollarsNum={"210"}/>

          <CardCoursesDesign Avatar={"/imgs/team-01.png"} Bg={"/imgs/course-03.jpg"}
          Header={"Responsive Web Design"}
          Text={"Mastering Responsive Web Designing And Media Queries And Know Everything About BreaKpoints"}
          UsersNum={"650"} DollarsNum={"90"}/>

          <CardCoursesDesign Avatar={"/imgs/team-01.png"} Bg={"/imgs/course-01.jpg"}
          Header={"Mastering Web Design"}
          Text={"Master The Art Of Web Designing And Mocking, Prototyping And Cerating Web Design Architecture"}
          UsersNum={"950"} DollarsNum={"165"}/>

          <CardCoursesDesign Avatar={"/imgs/team-03.png"} Bg={"/imgs/course-05.jpg"}
          Header={"PHP Examples"}
          Text={"PHP Tutorials And Examples And Practice On Web Application And Cooneting With Databases"}
          UsersNum={"850"} DollarsNum={"150"}/>

          <CardCoursesDesign Avatar={"/imgs/team-03.png"} Bg={"/imgs/course-04.jpg"}
          Header={"Mastering Python"}
          Text={"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life"}
          UsersNum={"950"} DollarsNum={"250"}/>

         
         
          
        </div>
          
       </div>

    )
}