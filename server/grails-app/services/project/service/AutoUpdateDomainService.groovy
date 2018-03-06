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

        if (event.entityObject instanceof BaseDomain) {

            event.entityAccess.setProperty("lastModifiedUser", 'admin1');
            event.entityAccess.setProperty("lastModifiedTime", new Date());
            event.entityAccess.setProperty("isDeleted", false);
        }
    }

    @Listener(Category)
    void preInsert(PreInsertEvent event) {

        updateCommon(event);
    }

    @Listener(Category)
    void preUpdate(PreUpdateEvent event) {

        updateCommon(event);
    }
}
