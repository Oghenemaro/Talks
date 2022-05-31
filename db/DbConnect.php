<?php  
    namespace shadow_chat;

    class DbConnect{

        public function connect(){
        // where host references the database container
            $connection = pg_connect("host=chatv2_db dbname=chat_room user=postgres password=1010 port=5432");
            // $result = pg_query($connection, "Insert into users (first name, last name, email, mobile, created) 
            //                 values ('Gibbs', 'Willie', 'gibbswillie@willie.com', '09845934576', '2022/05/15')");
            return $result;
        }
        

        public function createUser(){
           return 'user created';
        }
    }
?>