package project.service

import grails.converters.JSON
import grails.events.annotation.gorm.Listener
import grails.gorm.transactions.Transactional
import org.grails.datastore.mapping.engine.event.AbstractPersistenceEvent
import org.grails.datastore.mapping.engine.event.PreInsertEvent
import org.grails.datastore.mapping.engine.event.PreUpdateEvent
import project.domain.BaseDomain
import project.domain.Category

@Transactional
class AutoUpdateDomainService {

    private void updateCommon(AbstractPersistenceEvent event) {

        println(event.entityObject instanceof BaseDomain);

        if (event.entityObject instanceof BaseDomain) {

            println "123123";

//            println(event.entityAccess as JSON);

            event.entityAccess.setProperty("lastModifiedUser", 'admin1');
            event.entityAccess.setProperty("lastModifiedTime", new Date());
            event.entityAccess.setProperty("isDeleted", false);
        }
    }

    @Listener(Category)
    void preInsert(PreInsertEvent event) {

        println("preInsert");

        updateCommon(event);
    }

    @Listener(Category)
    void preUpdate(PreUpdateEvent event) {

        println("preUpdate");

        updateCommon(event);
    }
}
