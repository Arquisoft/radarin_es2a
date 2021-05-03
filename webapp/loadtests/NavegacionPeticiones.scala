
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class NavegacionPeticiones extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines2awebapp.herokuapp.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.9,ko-KR;q=0.8,ko;q=0.7,en;q=0.6")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"If-Modified-Since" -> "Sun, 02 May 2021 23:56:42 GMT",
		"If-None-Match" -> """W/"c5b-1792f834290"""",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_1 = Map(
		"If-Modified-Since" -> "Mon, 03 May 2021 07:54:15 GMT",
		"If-None-Match" -> """W/"1ec-17931387858"""",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0")

	val headers_2 = Map(
		"origin" -> "https://radarines2awebapp.herokuapp.com",
		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-fetch-dest" -> "empty",
		"sec-fetch-mode" -> "cors",
		"sec-fetch-site" -> "cross-site",
		"x-client-data" -> "CKq1yQEIkLbJAQimtskBCMS2yQEIipLKAQipncoBCPjHygEI5JzLAQipncsBCKCgywEIraDLAQ==")

    val uri1 = "https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel"

	val scn = scenario("NavegacionPeticiones")
		.exec(http("request_0")
			.get("/peticiones")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/manifest.json")
			.headers(headers_1),
            http("request_2")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&RID=10635&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F8.3.1%0D%0AContent-Type%3Atext%2Fplain%0D%0A&zx=39r8rz12tmii&t=1")
			.headers(headers_2)
			.formParam("count", "2")
			.formParam("ofs", "0")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"admins"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":2}}""")
			.formParam("req1___data__", """{"database":"projects/radarin-85e68/databases/(default)","addTarget":{"query":{"structuredQuery":{"from":[{"collectionId":"peticiones"}],"orderBy":[{"field":{"fieldPath":"__name__"},"direction":"ASCENDING"}]},"parent":"projects/radarin-85e68/databases/(default)/documents"},"targetId":4}}"""),
            http("request_3")
			.post(uri1 + "?database=projects%2Fradarin-85e68%2Fdatabases%2F(default)&VER=8&gsessionid=2teQqZrNP9RvSBprlGDrGIwZemkgLYsR78nn5NVcMYA&SID=dIxKGU7U1DwLJ8Cn-uzbow&RID=10636&AID=9&zx=aqe29bj6ktbq&t=1")
			.headers(headers_2)
			.formParam("count", "1")
			.formParam("ofs", "2")
			.formParam("req0___data__", """{"database":"projects/radarin-85e68/databases/(default)","removeTarget":2}""")))

	setUp(scn.inject(rampUsersPerSec(2) to(5) during(3 seconds) randomized).protocols(httpProtocol)
}