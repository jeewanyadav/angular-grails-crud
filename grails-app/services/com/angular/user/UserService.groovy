package com.angular.user

import com.angular.grails.User
import grails.transaction.Transactional


import grails.transaction.Transactional

@Transactional
class UserService {

    void register(User user){
        user.save(flush: true)
    }
    def userList(){
        return User.findAll()
    }
    def delete(long id){
        User.get(id).delete(flush: true)
    }

}
