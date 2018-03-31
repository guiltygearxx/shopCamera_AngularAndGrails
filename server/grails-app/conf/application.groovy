//Added by the Spring Security Core plugin :
grails.plugin.springsecurity.userLookup.userDomainClassName = 'project.domain.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'project.domain.UserAuthority'
grails.plugin.springsecurity.authority.className = 'project.domain.Authority'
grails.plugin.springsecurity.securityConfigType = "InterceptUrlMap"

grails.plugin.springsecurity.interceptUrlMap = [

        [pattern: '/api/login', access: ['permitAll']],

        [pattern: '/category', access: ['permitAll']],
        [pattern: '/category/**', access: ['permitAll']],

        [pattern: '/news/paginate', access: ['permitAll']],
        [pattern: '/news/**', httpMethod: 'GET', access: ['permitAll']],

        [pattern: '/solution/paginate', access: ['permitAll']],
        [pattern: '/solution/**', httpMethod: 'GET', access: ['permitAll']],

        [pattern: '/productView/paginate', access: ['permitAll']],
        [pattern: '/productView/**', httpMethod: 'GET', access: ['permitAll']],

        [pattern: '/product/paginate', access: ['permitAll']],
        [pattern: '/product/**', httpMethod: 'GET', access: ['permitAll']],

        [pattern: '/contact.json', httpMethod: 'POST', access: ['permitAll']],

        [pattern: '/order.json', httpMethod: 'POST', access: ['permitAll']],
        [pattern: '/orderDetail.json', httpMethod: 'POST', access: ['permitAll']],

        [pattern: '/propertiesCamera/paginate', access: ['permitAll']],
        [pattern: '/propertiesCamera/**', httpMethod: 'GET', access: ['permitAll']],

        [pattern: '/uploadFile/downloadFile/*', access: ['permitAll']],

        [pattern: '/attribute', httpMethod: 'GET', access: ['permitAll']],

        [pattern: '/api/logout', access: ['isFullyAuthenticated()']],
        [pattern: '/**', access: ['isFullyAuthenticated()']]
]

grails.plugin.springsecurity.filterChain.chainMap = [

        [pattern: '/category', filters: 'JOINED_FILTERS'],
        [pattern: '/category/**', filters: 'JOINED_FILTERS'],

        [pattern: '/news/paginate', filters: 'JOINED_FILTERS'],
        [pattern: '/news/**', httpMethod: 'GET', filters: 'JOINED_FILTERS'],

        [pattern: '/solution/paginate', filters: 'JOINED_FILTERS'],
        [pattern: '/solution/**', httpMethod: 'GET', filters: 'JOINED_FILTERS'],

        [pattern: '/productView/paginate', filters: 'JOINED_FILTERS'],
        [pattern: '/productView/**', httpMethod: 'GET', filters: 'JOINED_FILTERS'],

        [pattern: '/product/paginate', filters: 'JOINED_FILTERS'],
        [pattern: '/product/**', httpMethod: 'GET', filters: 'JOINED_FILTERS'],

        [pattern: '/contact.json', httpMethod: 'POST', filters: 'JOINED_FILTERS'],

        [pattern: '/order.json', httpMethod: 'POST', filters: 'JOINED_FILTERS'],
        [pattern: '/orderDetail.json', httpMethod: 'POST', filters: 'JOINED_FILTERS'],

        [pattern: '/propertiesCamera/paginate', filters: 'JOINED_FILTERS'],
        [pattern: '/propertiesCamera/**', httpMethod: 'GET', filters: 'JOINED_FILTERS'],

        [pattern: '/uploadFile/downloadFile/*', filters: 'JOINED_FILTERS'],

        [pattern: '/attribute', httpMethod: 'GET', filters: 'JOINED_FILTERS'],

        [pattern: '/**', filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter'],
]

// Optimistic approach (restrict access by URL only) to allow 'OPTIONS' access for CORS
grails.plugin.springsecurity.rejectIfNoRule = false
grails.plugin.springsecurity.fii.rejectPublicInvocations = false

grails.plugin.springsecurity.rest.logout.endpointUrl = '/api/logout'
grails.plugin.springsecurity.rest.token.validation.useBearerToken = false
grails.plugin.springsecurity.rest.token.validation.headerName = 'x-auth-token'
grails.plugin.springsecurity.rest.token.validation.endpointUrl = '/api/validate'
grails.plugin.springsecurity.rest.token.storage.gorm.tokenDomainClassName = "project.domain.AuthenticationToken"
