<?php
    /**
     * Class Person
     * Allows you to create a new person
     */
    class Person {

        /**
         * @var string
         */
        private $firstname;
        /**
         * @var int
         */
        private $age;
        /**
         * @param $firstname string for firstname $age int for age
         */
        public function __construct($firstname, $age){
            $this->firstname = $firstname;
            $this->age = $age;
        }
        /**
         * just get the firstname
         *
         * @return    string
         */
        public function getName(){
            return $this->name;
        }
        /**
         * just get the age
         * @return    int
         */
        public function getAge(){
            return $this->age;
        }

    };
    $raph = new Person('Raphaël', 30);
    echo $raph->age;
 ?>
