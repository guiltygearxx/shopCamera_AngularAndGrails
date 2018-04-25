package project.service

import grails.gorm.transactions.Transactional
import project.domain.Attribute

@Transactional
class CacheService {

    List<Attribute> attributes;

    void cachingAttribute() {

        println("CacheService. cachingAttribute")

        attributes = Attribute.findAllByIsDeleted(false).sort { it.order };
    }
}
