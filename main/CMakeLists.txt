# Zarejestruj komponent i dodaj źródła
idf_component_register(SRCS "main.c" "wifi_app.c" "http_server.c"
                        INCLUDE_DIRS "."
                        EMBED_FILES "webpage/favicon.ico" 
                                    "webpage/index.html" 
                                    "webpage/app.js" 
                                    "webpage/app.css"  
                                    "webpage/jquery-3.3.1.min.js"
                        )