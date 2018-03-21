//Added by the Spring Security Core plugin :
grails.plugin.springsecurity.userLookup.userDomainClassName = 'project.domain.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'project.domain.UserAuthority'
grails.plugin.springsecurity.authority.className = 'project.domain.Authority'
grails.plugin.springsecurity.securityConfigType = "InterceptUrlMap"

grails.plugin.springsecurity.interceptUrlMap = [

        [pattern: '/api/login', access: ['permitAll']],
        [pattern: '/api/logout', access: ['isFullyAuthenticated()']],
        [pattern: '/category', access: ['permitAll']],
        [pattern: '/category/**', access: ['permitAll']],
        [pattern: '/productView/paginate', access: ['permitAll']],
        [pattern: '/product/**', access: ['permitAll'], httpMethod: 'GET'],
        [pattern: '/**', access: ['isFullyAuthenticated()']]
]

grails.plugin.springsecurity.filterChain.chainMap = [

//        [pattern: '/**', filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter'],
//[pattern: '/**', filters: 'JOINED_FILTERS'],
]

// Optimistic approach (restrict access by URL only) to allow 'OPTIONS' access for CORS
grails.plugin.springsecurity.rejectIfNoRule = false
grails.plugin.springsecurity.fii.rejectPublicInvocations = false

grails.plugin.springsecurity.rest.logout.endpointUrl = '/api/logout'
grails.plugin.springsecurity.rest.token.validation.useBearerToken = false
grails.plugin.springsecurity.rest.token.validation.headerName = 'x-auth-token'
//grails.plugin.springsecurity.rest.token.storage.memcached.hosts = 'localhost:8080'
//grails.plugin.springsecurity.rest.token.storage.memcached.username = ''
//grails.plugin.springsecurity.rest.token.storage.memcached.password = ''
//grails.plugin.springsecurity.rest.token.storage.memcached.expiration = 86400
grails.plugin.springsecurity.rest.token.storage.gorm.tokenDomainClassName = "project.domain.AuthenticationToken"