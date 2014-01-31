/*global dojo */
/** @license
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.Config");
dojo.declare("js.Config", null, {

    // This file contains various configuration settings for "Election Polling Place" template
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application title                  - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set splash screen message                  - [ Tag(s) to look for: SplashScreenMessage ]
    // 4.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]
    //
    // 5.  Specify URLs for basemaps                  - [ Tag(s) to look for: BaseMapLayers ]
    // 6.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]
    //
    // 7.  Choose to use WebMap or map services       - [ Tag(s) to look for: UseWebmap <true/false> ]
    // 8.  Specify WebMapId, if using WebMap          - [ Tag(s) to look for: WebMapId ]
    // 9.  Or for using map services:
    // 9a. Specify URLs for operational layers        - [ Tag(s) to look for: PollLayer, PollMobileLayer, PrecinctLayer, PrecinctOfficeLayer, PollingCommentsLayer, ReferenceOverlayLayer ]
    // 9b. Customize info-Window settings             - [ Tag(s) to look for: InfoWindowHeader, InfoWindowContent ]
    // 9c. Customize info-Popup settings              - [ Tag(s) to look for: InfoPopupFieldsCollection, ShowCommentsTab ]
    // 9d. Customize info-Popup size                  - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 9e. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs, FormatDateAs ]
    //
    // 10. Customize address search settings          - [ Tag(s) to look for: LocatorSettings ]
    //
    // 11. Set URL for geometry service               - [ Tag(s) to look for: GeometryService ]
    //
    // 12. Customize routing settings for directions  - [ Tag(s) to look for: RouteServiceURL, RouteColor, RouteWidth ]
    // 12a.Choose destination for route generation    - [ Tag(s) to look for: GenerateRouteToNonDesignatedPollingPlace <true/false> ]
    //
    // 13. Configure data to be displayed on the bottom panel
    //                                                - [ Tag(s) to look for: InfoBoxWidth, PollingPlaceTabData, ElectedOfficialsTabData ]
    //
    // 14. Specify URLs for map sharing               - [ Tag(s) to look for: FacebookShareURL, TwitterShareURL, ShareByMailLink ]
    // 14a.In case of changing the TinyURL service
    //     Specify URL for the new service            - [ Tag(s) to look for: MapSharingOptions (set TinyURLServiceURL, TinyURLResponseAttribute) ]
    //
    //

    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Bureau de vote",

    // Set application icon path
    ApplicationIcon: "images/EPPIcon.png",

    // Set splash window content - Message that appears when the application starts
    SplashScreenMessage: "<b>Bureaux de vote</b> <br/> <hr/> <br/> L'application <b>Bureaux de vote</b> offre un moyen simple pour les électeurs de trouver leur bureau de vote.<br /><br />Lorsqu'un électeur saisit son adresse, l'application met en évidence le lieu de vote approprié ainsi que le bureau de vote associé. Des informations pertinentes sur ce lieu de vote sont également présentées dans une série d'onglets au bas de l'application.<br/><br/>Pour toutes informations supplémentaires sur le fonctionnement de cette application référez vous à l'aide disponible en haut à droite de votre fenêtre. <br/><br/>",

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All basemaps need to use the same spatial reference. By default, on application start the first basemap will be loaded
    BaseMapLayers: [{
        Key: "parcelMap",
        ThumbnailSource: "images/parcelMap.png",
        Name: "Topo Map",
        MapURL: "http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"
    }, {
        Key: "hybridMap",
        ThumbnailSource: "images/imageryHybrid.png",
        Name: "Imagerie",
        MapURL: "http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
    }],

    // Initial map extent. Use comma (,) to separate values and don t delete the last comma
    DefaultExtent: "245959, 6244369, 252779, 6250164",	
	
    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // WebMaps are not supported with the 10.2 version of the Election Polling Place application. Please use Map Services for operational layers. Do not change the "UseWebmap" and "WebMapId" parameters.
    UseWebmap: false,

    WebMapId: "",

    // Set the following options for the configuration of operational layers
    PollLayer: {
        ServiceUrl: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/0",
        Image: "images/pollingPlace.png",
        UseImage: true,
        PrimaryKeyForPolling: "${ID_LV}"
    },
    PollMobileLayer: {
        ServiceUrl: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/0",
        Image: "images/pollingPlace.png",
        UseImage: true,
        PrimaryKeyForPolling: "${ID_LV}"
    },

    PrecinctLayer: {
        ServiceUrl: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/1",
        Color: "#00ff00",
        Alpha: 0.75,
        UseColor: false
    },

    PrecinctOfficeLayer: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/4",

    // Set field for precinct ID
    PrecinctID: "${NUM_BUR}",

    PollingCommentsLayer: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/3",
    // Set primary key for comments table
    PrimaryKeyForComments: "${ID_LV}",

    // ServiceUrl is the REST end point for the reference overlay layer
    // DisplayOnLoad setting this will show the reference overlay layer on load
    ReferenceOverlayLayer: {
        ServiceUrl: "http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer",
        DisplayOnLoad: false
    },


    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-WINDOW SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-window is a small, two line popup that gets displayed on selecting a feature
    // Set Info-window title. Configure this with text/fields
    InfoWindowHeader: "${LIEU_VOTE}",

    // Choose content/fields for the info window
    InfoWindowContent: "${ADRESSE}",

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-POPUP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-popup is a popup dialog that gets displayed on selecting a feature
    // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
    InfoPopupFieldsCollection: [{
        DisplayText: "Adresse:",
        FieldName: "${ADRESSE}"
    }, {
		DisplayText: "1: Bureau n°",
		FieldName: "${B1}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 2:",
		FieldName: "${B2}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 3:",
		FieldName: "${B3}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 4:",
		FieldName: "${B4}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 5:",
		FieldName: "${B5}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 6:",
		FieldName: "${B6}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 7:",
		FieldName: "${B7}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 8:",
		FieldName: "${B8}",
		NoNullDisplay: true
	}],

    // Set this to true to show "Comments" tab in the info-Popup
    ShowCommentsTab: false,


    // Set size of the info-Popup - select maximum height and width in pixels (not applicable for tabbed info-Popups)
    InfoPopupHeight: 260, //minimum height should be 260 for the info-popup in pixels
    InfoPopupWidth: 330, //minimum width should be 330 for the info-popup in pixels

    // Set string value to be shown for null or blank values
    ShowNullValueAs: "-",

    // Set date format
    FormatDateAs: "dd MM yyyy",


    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set Locator service settings
	//Default US GEOCODER
    LocatorSettings: {
        DefaultLocatorSymbol: "images/RedPushpin.png",
        SymbolSize: {
            width: 25,
            height: 25
        },
        DefaultValue: "120 Rue Gallieni",
		DefaultCity: "Boulogne-Billancourt",
        LocatorParameters: ["SingleLine"],
        LocatorFields: ["Address", "City", "State"],
        LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
        CandidateFields: "Loc_name, Score, Match_addr",
        FieldName: "${Match_addr}",
        LocatorFieldName: 'Loc_name',
        LocatorFieldValues: ["FRA.StreetName", "FRA.PointAddress", "FRA.StreetAddress", "POI"],
        AddressMatchScore: 90,
        LocatorRippleSize: 40,
		UseDefault: true,
		UseSuggestions: true,
		SuggestCenterX: 249379,
		SuggestCenterY: 6246991,
		SuggestDistance: 10000,
		BaseMapWkid: 102100,
		SuggestTimeout: 1000
    },

	// French BD Adresse
	// LocatorSettings: {
        // DefaultLocatorSymbol: "images/RedPushpin.png",
        // SymbolSize: {
            // width: 25,
            // height: 25
        // },
		// Token: "",
        // DefaultValue: "20 Avenue Andre Morizet",
		// DefaultCity: "Boulogne-Billancourt",
        // LocatorParameters: ["SingleLine"],
        // LocatorFields: ["Address", "City", "Postal"],
        // LocatorURL: "http://tasks.esrifrance.fr/arcgis/rest/services/GEOCODAGE/Geocodage_BDAdresse_France/GeocodeServer",
        // CandidateFields: "Loc_name, Score, Match_addr",
        // FieldName: "${Match_addr}",
        // LocatorFieldName: 'Loc_name',
        // LocatorFieldValues: ["2_AdresseInter", "3_Voie"],
        // AddressMatchScore: 75,
        // LocatorRippleSize: 40,
		// UseDefault: true
    // },
	
    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set geometry service URL
    GeometryService: "http://testv3.arcopole.fr:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer",


    // ------------------------------------------------------------------------------------------------------------------------
    // DRIVING DIRECTIONS SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for routing service (network analyst), to turn off the routing functionality update the "ShowDirection" variable to false in the "PollingPlaceTabData" section below.
    RouteServiceURL: "http://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",

    // Set color for the route symbol
    RouteColor: "#7F7FFE",

    // Set width of the route
    RouteWidth: 6,

    // Choose destination polling place for route generation
    // If set to true, route will be generated for any selected polling place; otherwise route will be generated for the designated polling place
    GenerateRouteToNonDesignatedPollingPlace: false,

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR INFO-PODS ON THE BOTTOM PANEL
    // ------------------------------------------------------------------------------------------------------------------------
    // Set width of the boxes in the bottom panel
    InfoBoxWidth: 422,


    // Set data to be displayed in the "Polling Place" tab on the bottom panel
    PollingPlaceTabData: {
        DetailsBox: {
            HeaderColor: "#303030",
            Title: "<b>Détails</b>",
            Data: [{
                DisplayText: "Nom:",
                FieldName: "${LIEU_VOTE}"
            }, {
                DisplayText: "Adresse:",
                FieldName: "${ADRESSE}"
            }]
        },
        DirectionBox: {
            HeaderColor: "#303030",
            Title: "<b>Itineraire</b>",
            ShowDirection: true
        }
    },

    // Set data to be displayed in the "Elected Officials" tab on the bottom panel
    ElectedOfficialsTabData: {
        CountyLayer: {
            ServiceUrl: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/2",
            HeaderColor: "#303030",
            Title: "<b>Ville</b>",
            Data: [{
                DisplayText: "Code postal:",
                FieldName: "${CODE_POSTAL}"
            }, {
                DisplayText: "Nom:",
                FieldName: "${NOM}"
            }, {
                DisplayText: "Site Web:",
                FieldName: "${URL_SITE}"
            }]
        }
    },

    // Define the database field names
    // Note: DateFieldName refers to a date database field.
    // All other attributes refer to text database fields.
    DatabaseFields: {
        PollingIdFieldName: "ID_LV",
        CommentsFieldName: "COMMENTAIRES",
        DateFieldName: "DATE"
    },

    // Set info-pop fields for displaying comment
    CommentsInfoPopupFieldsCollection: {
        Submitdate: "${DATE}",
        Comments: "${COMMENTAIRES}"
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions: {
        TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=lucian.angelus&apiKey=1dUeT03&uri=${0}&format=json",
        TinyURLResponseAttribute: "data.url",

        FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Election%20Polling%20Place",
        TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=Election%20Polling%20Place ${0}",
        ShareByMailLink: "mailto:%20?subject=Check%20out%20this%20map!&body=${0}"
    }
});
