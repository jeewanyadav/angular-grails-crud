package com.angular.grails

class User {
    String firstName
    String lastName
    static constraints = {
        firstName nullable: false
        lastName nullable: false

    }
}
