package com.angular.grails

import grails.converters.JSON

class UserController {
    def userService
    def register= {
        def resp=[ : ]
        if(!request.JSON.id){
            User user=new User()
            user.setFirstName(request.JSON.firstName)
            user.setLastName(request.JSON.lastName)
            userService.register(user)
            resp.message="User Successfully added"
        }
        else{
            User user=User.get(request.JSON.id as long)
            user.setFirstName(request.JSON.firstName)
            user.setLastName(request.JSON.lastName)

            userService.register(user)
            resp.message="User Successfully updated"

        }
        render resp as JSON
    }
    def userList={
        def resp=[:]
        resp.users=userService.userList()
        render resp as JSON
    }
    def delete={
        def resp=[:]
        userService.delete(request.JSON.id as long)
        println request.JSON.id
        resp.message="User Successfully deleted"
        render resp as JSON
    }

}
