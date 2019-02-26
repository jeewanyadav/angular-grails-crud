package com.angular.grails

class User {
    String firstName
    String lastName
    String phoneNo
    static constraints = {
        firstName nullable: false
        lastName nullable: false
        phoneNo nullable: false
    }
}
