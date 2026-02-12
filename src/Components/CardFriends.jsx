import CardFriendsDesign from "./CardFriendsPage/CardFrindesDesign"


export default function CradFriends(){
    return(
       <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-3 mr-3 pb-3">
         <CardFriendsDesign FName={"Ahmed Nasser"} FJob={"JavaScript Developer"} Imgs={"/imgs/friend-01.jpg"}
         Fnums={"99 Friend"} FProjects={"15 Projects"} FArticles={"25 Articles"} FJoined={"Joined 02/10/2021"}
         VIP={"VIP"}/>
         <CardFriendsDesign FName={"Omar Fathy"} FJob={"Cloud Developer"} Imgs={"/imgs/friend-02.jpg"}
         Fnums={"30 Friend"} FProjects={"11 Projects"} FArticles={"12 Articles"} FJoined={"Joined 02/08/2020"}
         />
         <CardFriendsDesign FName={"Omar Ahmed"} FJob={"Mobile Developer"} Imgs={"/imgs/friend-03.jpg"}
         Fnums={"80 Friend"} FProjects={"20 Projects"} FArticles={"18 Articles"} FJoined={"Joined 02/06/2020"}
         />
         <CardFriendsDesign FName={"Shady Nabil"} FJob={"Back-End Developer"} Imgs={"/imgs/friend-04.jpg"}
         Fnums={"70 Friend"} FProjects={"30 Projects"} FArticles={"18 Articles"} FJoined={"Joined 28/06/2020"}
         />
         <CardFriendsDesign FName={"Mohamed Ibrahim"} FJob={"Algorithm Developer"} Imgs={"/imgs/friend-05.jpg"}
         Fnums={"80 Friend"} FProjects={"30 Projects"} FArticles={"18 Articles"} FJoined={"Joined 28/08/2020"}
        />
         <CardFriendsDesign FName={"Amr Hendawy"} FJob={"Back-End Developer"} Imgs={"/imgs/friend-04.jpg"}
         Fnums={"70 Friend"} FProjects={"30 Projects"} FArticles={"18 Articles"} FJoined={"Joined 28/06/2020"}
         />
         <CardFriendsDesign FName={"Mahmoud Adel"} FJob={"Cloud Developer"} Imgs={"/imgs/friend-02.jpg"}
         Fnums={"30 Friend"} FProjects={"11 Projects"} FArticles={"12 Articles"} FJoined={"Joined 02/08/2020"}
         />
         <CardFriendsDesign FName={"Ahmed Abuzaid"} FJob={"Content Creator"} Imgs={"/imgs/friend-05.jpg"}
         Fnums={"80 Friend"} FProjects={"30 Projects"} FArticles={"18 Articles"} FJoined={"Joined 28/08/2020"}
         VIP={"Vip"}/>
         <CardFriendsDesign FName={"Gareeb Elshiekh"} FJob={"JavaScript Developer"} Imgs={"/imgs/friend-01.jpg"}
         Fnums={"90 Friend"} FProjects={"15 Projects"} FArticles={"25 Articles"} FJoined={"Joined 02/10/2020"}
         VIP={"Vip"}/>
         <CardFriendsDesign FName={"Hamza"} FJob={"Front-End Developer"} Imgs={"/imgs/friend-03.jpg"}
         Fnums={"80 Friend"} FProjects={"20 Projects"} FArticles={"18 Articles"} FJoined={"Joined 02/06/2020"}
         />
        </div>
          
       </div>

    )
}