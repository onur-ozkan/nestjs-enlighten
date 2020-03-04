export const Errors = {
    "400": {
        "error": "Bad Request",
        "info": "The request had bad syntax or was inherently impossible to be satisfied.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": ""
        }
    },
    "401": {
        "error": "Unauthorized",
        "info": "The parameter to this message gives a specification of authorization schemes which are acceptable. The client should retry the request with a suitable Authorization header.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "402": {
        "error": "Payment Required",
        "info": "The parameter to this message gives a specification of charging schemes acceptable. The client may retry the request with a suitable ChargeTo header.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "403": {
        "error": "Forbidden",
        "info": "The request is for something forbidden. Authorization will not help.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "404": {
        "error": "Not Found",
        "info": "The server has not found anything matching the URI given.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "405": {
        "error": "Method Not Allowed",
        "info": "Request method not supported by that resource.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "406": {
        "error": "Not Acceptable",
        "info": "Content not acceptable according to the Accept headers.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "407": {
        "error": "Proxy Authentication Required",
        "info": "Client must first authenticate itself with the proxy.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "408": {
        "error": "Request Timeout",
        "info": "Server timed out waiting for the request.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "409": {
        "error": "Conflict",
        "info": "Request could not be processed because of conflict.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "410": {
        "error": "Gone",
        "info": "Resource is no longer available and will not be available again.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "411": {
        "error": "Length Required",
        "info": "Request did not specify the length of its content.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "412": {
        "error": "Precondition Failed",
        "info": "Server does not meet request preconditions.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "413": {
        "error": "Request Entity Too Large",
        "info": "Request is larger than the server is willing or able to process.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "414": {
        "error": "Request URI Too Large",
        "info": "URI provided was too long for the server to process.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "415": {
        "error": "Unsupported Media Type",
        "info": "Server does not support media type.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "416": {
        "error": "Requested Rage Not Satisfiable",
        "info": "Client has asked for unprovidable portion of the file.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "417": {
        "error": "Expectation Failed",
        "info": "Server cannot meet requirements of Expect request-header field.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "418": {
        "error": "I'm a teapot",
        "info": "I'm a teapot.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "421": {
        "error": "Misdirected Request",
        "info": "Server is not able to produce a response.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "422": {
        "error": "Unprocessable Entity",
        "info": "Request unable to be followed due to semantic errors.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "423": {
        "error": "Locked",
        "info": "Resource that is being accessed is locked.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "424": {
        "error": "Failed Dependency",
        "info": "Request failed due to failure of a previous request.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "425": {
        "error": "Too Early",
        "info": "Indicates that the server is unwilling to risk processing a request that might be replayed.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "426": {
        "error": "Upgrade Required",
        "info": "Client should switch to a different protocol.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "428": {
        "error": "Precondition Required",
        "info": "Origin server requires the request to be conditional.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "429": {
        "error": "Too Many Requests",
        "info": "User has sent too many requests in a given amount of time.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "431": {
        "error": "Request Header Fields Too Large",
        "info": "Server is unwilling to process the request.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "444": {
        "error": "No Response",
        "info": "Server returns no information and closes the connection.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "451": {
        "error": "Wrong Exchange Server",
        "info": "The server cannot reach the client's mailbox.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "460": {
        "error": "",
        "info": "Client closed the connection with the load balancer before the idle timeout period elapsed. Typically when client timeout is sooner than the Elastic Load Balancer's timeout.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "463": {
        "error": "",
        "info": "The load balancer received an X-Forwarded-For request header with more than 30 IP addresses.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "494": {
        "error": "Request header too large",
        "info": "Client sent too large request or too long header line.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "495": {
        "error": "SSL Certificate Error",
        "info": "Client has provided an invalid client certificate.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "496": {
        "error": "SSL Certificate Required",
        "info": "Client certificate is required but not provided.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "497": {
        "error": "HTTP Request Sent to HTTPS Port",
        "info": "Client has made a HTTP request to a port listening for HTTPS requests.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "499": {
        "error": "Client Closed Request",
        "info": "Client has closed the request before the server could send a response.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "500": {
        "error": "Internal Error",
        "info": "The server encountered an unexpected condition which prevented it from fulfilling the request.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "501": {
        "error": "Not Implemented",
        "info": "The server does not support the functionality required to fulfill the request.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "502": {
        "error": "Bad Gateway",
        "info": "The server error response code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "503": {
        "error": "Service Unavailable",
        "info": "The server error response code indicates that the server is not ready to handle the request.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "504": {
        "error": "Gateway Timeout",
        "info": "Gateway did not receive response from upstream server.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "505": {
        "error": "HTTP Version Not Supported",
        "info": "Server does not support the HTTP protocol version.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "506": {
        "error": "Variant Also Negotiates",
        "info": "Content negotiation for the request results in a circular reference.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "507": {
        "error": "Insufficient Storage",
        "info": "Server is unable to store the representation.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "508": {
        "error": "Loop Detected",
        "info": "Server detected an infinite loop while processing the request.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "510": {
        "error": "Not Extended",
        "info": "Further extensions to the request are required.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "511": {
        "error": "Network Authentication Required",
        "info": "Client needs to authenticate to gain network access.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "520": {
        "error": "Web Server Returned an Unknown Error",
        "info": "The origin server returned an empty, unknown, or unexplained response to Cloudflare.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "521": {
        "error": "Web Server Is Down",
        "info": "The origin server has refused the connection from Cloudflare.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "522": {
        "error": "Connection Timed Out",
        "info": "Cloudflare could not negotiate a TCP handshake with the origin server.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "523": {
        "error": "Origin Is Unreachable",
        "info": "Cloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "524": {
        "error": "A Timeout Occurred",
        "info": "Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "525": {
        "error": "SSL Handshake Failed",
        "info": "Cloudflare could not negotiate a SSL/TLS handshake with the origin server.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "526": {
        "error": "Invalid SSL Certificate",
        "info": "Cloudflare could not validate the SSL certificate on the origin web server.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "527": {
        "error": "Railgun Error",
        "info": "Error 527 indicates an interrupted connection between Cloudflare and the origin server's Railgun server.",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    },
    "530": {
        "error": "",
        "info": "Error 530 is returned along with a 1xxx error/",
        "solutionOptions": {
            "intentional": "Your project intentionally thrown this error. Please check the targeted line below in your project. ",
            "notIntentional": " "
        }
    }
}