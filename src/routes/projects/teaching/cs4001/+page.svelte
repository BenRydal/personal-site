<script lang="ts">
	import { ArrowLeft, Calendar, MapPin, Users, Clock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>CS 4001: Computing, Society & Professionalism | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Computing, Society & Professionalism course at Georgia Tech - Fall 2019"
	/>
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-16">
	<a
		href="/projects/teaching"
		class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8"
	>
		<ArrowLeft class="w-4 h-4" />
		Back to Teaching
	</a>

	<div class="flex items-center gap-3 text-sm text-gray-500 mb-4">
		<span class="font-mono bg-gray-100 px-2 py-1 rounded">CS 4001</span>
		<span>Georgia Institute of Technology</span>
	</div>

	<h1 class="text-4xl font-bold text-gray-900">Computing, Society & Professionalism</h1>

	<div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
		<span class="flex items-center gap-1">
			<Calendar class="w-4 h-4" />
			Fall 2019
		</span>
		<span class="flex items-center gap-1">
			<MapPin class="w-4 h-4" />
			College of Computing 102
		</span>
		<span class="flex items-center gap-1">
			<Clock class="w-4 h-4" />
			T/Th 9:30-10:45am
		</span>
	</div>

	<!-- Teaching Team -->
	<div class="mt-6 p-4 bg-gray-50 rounded-lg">
		<div class="flex items-center gap-2 mb-2">
			<Users class="w-4 h-4 text-gray-600" />
			<span class="font-medium text-gray-900">Teaching Team</span>
		</div>
		<p class="text-sm text-gray-600">
			<strong>Instructor:</strong> Dr. Ben Rydal Shapiro
			<br />
			<strong>Office Hours:</strong> Monday 1-2pm, TSRB 220
			<br />
			<strong>TA:</strong> Miranda Parker
		</p>
	</div>

	<!-- Course Overview -->
	<div class="mt-8">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Course Overview</h2>
		<p class="text-gray-600 leading-relaxed">
			This course examines ethical complexities in computing and design across diverse contexts.
			Students develop critical analysis and argumentation skills through discussion, interactive
			lectures, and assignments focused on artificial intelligence, predictive policing, data
			science, and research ethics.
		</p>
	</div>

	<!-- Learning Goals -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Learning Goals</h2>
		<ul class="space-y-3 text-gray-600">
			<li>
				<strong>Ethics & Design:</strong> Implementing moral decision-making in technology and evaluating
				designs through reasoned arguments grounded in ethical theories
			</li>
			<li>
				<strong>Professional Ethics:</strong> Understanding responsibilities of computing professionals
				and applying ACM/IEEE codes of ethics
			</li>
			<li>
				<strong>Computing & Society:</strong> Analyzing technology's societal impact and political dimensions
			</li>
			<li>
				<strong>Argumentation:</strong> Strengthening oral, written, and visual communication skills
			</li>
		</ul>
	</div>

	<!-- Required Texts -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Required & Recommended Texts</h2>
		<ul class="space-y-2 text-gray-600">
			<li>
				<strong>Required:</strong> Ethics for the Information Age (7th Edition) by Michael Quinn
			</li>
			<li>
				<strong>Recommended:</strong> Writing Arguments: A Rhetoric with Readings (9th Edition) by Ramage,
				Bean, and Johnson
			</li>
		</ul>
	</div>

	<!-- Grading -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Grading</h2>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Participation (25%)</h3>
				<p class="text-sm text-gray-600">Class discussion, questions, peer support, preparation</p>
			</div>
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Assignments (25%)</h3>
				<ul class="text-sm text-gray-600 space-y-1">
					<li>Assignment 1: Article argument analysis (5%)</li>
					<li>Assignment 2: Term paper proposal (5%)</li>
					<li>Assignment 3: Term paper outline (10%)</li>
					<li>Assignment 4: Term paper presentation (5%)</li>
				</ul>
			</div>
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Midterm Exam (25%)</h3>
				<p class="text-sm text-gray-600">In-class exam</p>
			</div>
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Term Paper (25%)</h3>
				<p class="text-sm text-gray-600">Final research paper</p>
			</div>
		</div>
	</div>

	<!-- Course Schedule -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Course Schedule</h2>
		<div class="space-y-6 text-sm">
			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 1</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">8/20</span> — Introductions & course overview</div>
					<div>
						<span class="text-gray-500">8/22</span> — Personal ethical dilemma activity
						<span class="text-gray-400">(Complete background survey)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 2</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">8/27</span> — Therac 25 case study
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="http://sunnyday.mit.edu/papers/therac.pdf"
									target="_blank"
									class="text-accent hover:underline">Medical Devices: The Therac-25</a
								> - Leveson
							</li>
							<li>
								<a
									href="http://www.nytimes.com/2010/01/24/health/24radiation.html"
									target="_blank"
									class="text-accent hover:underline"
									>Radiation Offers New Cures, and Ways to Do Harm</a
								>
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">8/29</span> — Introduction to argument reading/writing
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Writing Arguments Chapters 1 & 2</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 3</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">9/3</span> — Trolley cars; Utilitarianism & Kantianism
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Quinn Chapter 2 through 2.8</li>
							<li>
								<a
									href="https://www.youtube.com/watch?v=kBdfcR-8hEY&t=1590s"
									target="_blank"
									class="text-accent hover:underline">The Moral Side of Murder</a
								> - Sandel (start at 24:35)
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">9/5</span> — Ethics discussion
						<span class="text-highlight font-medium">DUE: Assignment 1</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 4</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">9/10</span> — Social contract theory; Virtue ethics
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Quinn Complete Chapter 2</li>
							<li>
								<a
									href="https://www.youtube.com/watch?v=MuiazbyOSqQ"
									target="_blank"
									class="text-accent hover:underline">The Good Citizen</a
								> - Sandel (start at 18:00)
							</li>
							<li>
								<a
									href="https://plato.stanford.edu/entries/ethics-virtue/"
									target="_blank"
									class="text-accent hover:underline">Virtue Ethics</a
								> - Stanford Encyclopedia (optional)
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">9/12</span> — Predictive policing case study
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://www.nytimes.com/2018/05/26/us/chicago-police-surveillance.html"
									target="_blank"
									class="text-accent hover:underline"
									>Can 30,000 Cameras Help Solve Chicago's Crime Problem?</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 5</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">9/17</span> — Artifacts, algorithms & politics
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.670.4346&rep=rep1&type=pdf"
									target="_blank"
									class="text-accent hover:underline">The Relevance of Algorithms</a
								> - Gillespie
							</li>
							<li>
								<a
									href="https://www.cc.gatech.edu/~beki/cs4001/Winner.pdf"
									target="_blank"
									class="text-accent hover:underline">Do Artifacts Have Politics?</a
								> - Winner (skim)
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">9/19</span> — Big data issues
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://www.youtube.com/watch?v=gdCJYsKlX_Y"
									target="_blank"
									class="text-accent hover:underline">Weapons of Math Destruction</a
								> - O'Neil (video)
							</li>
							<li>
								<a
									href="https://people.cs.kuleuven.be/~bettina.berendt/teaching/ViennaDH15/boyd_crawford_2012.pdf"
									target="_blank"
									class="text-accent hover:underline">Critical Questions for Big Data</a
								> - Boyd & Crawford
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 6</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">9/24</span> — Structuring arguments
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Writing Arguments Chapters 3 & 4</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">9/26</span> — Term paper discussion
						<span class="text-highlight font-medium"
							>DUE: Assignment 2 (bring 3 printed copies)</span
						>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 7</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">10/1</span> — Professional ethics I
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://cacm.acm.org/magazines/2018/1/223896-acm-code-of-ethics/fulltext"
									target="_blank"
									class="text-accent hover:underline">2018 ACM Code of Ethics</a
								>
							</li>
							<li>Quinn Chapter 9</li>
						</ul>
					</div>
					<div><span class="text-gray-500">10/3</span> — Mid-term review</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 8</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">10/8</span> —
						<span class="font-medium text-highlight">Midterm Exam (In-Class)</span>
					</div>
					<div>
						<span class="text-gray-500">10/10</span> — Professional ethics II
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Bring sample code/algorithm to class</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Fall Break</h3>
				<div class="mt-2 text-gray-500">10/15 — No Class</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 9</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">10/17</span> — Data, privacy & government
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Quinn Chapter 5</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">10/24</span> — Guest visits
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Quinn Chapter 6</li>
							<li>
								<a
									href="http://meipokwan.org/Paper/SCG_2008.pdf"
									target="_blank"
									class="text-accent hover:underline">From Oral Histories to Visual Narratives</a
								> - Kwan (optional)
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 10</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">10/29</span> — Visual argument
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://www.ted.com/talks/giorgia_lupi_how_we_can_find_ourselves_in_data?language=en"
									target="_blank"
									class="text-accent hover:underline">How We Can Find Ourselves in Data</a
								> - Lupi (TED video)
							</li>
							<li>
								<a
									href="https://wattenberger.com/blog/d3#intro"
									target="_blank"
									class="text-accent hover:underline">Intro to D3.js</a
								> (skim)
							</li>
							<li>
								<a
									href="http://journals.sagepub.com/doi/pdf/10.1177/0306312714535679"
									target="_blank"
									class="text-accent hover:underline">Academic Urban Legends</a
								> - Rekdal
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">10/31</span> — Peer review workshop
						<span class="text-highlight font-medium">DUE: Assignment 3</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 11</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">11/5</span> — Visual argument II & data ethics
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="http://meipokwan.org/Paper/SCG_2008.pdf"
									target="_blank"
									class="text-accent hover:underline">From Oral Histories to Visual Narratives</a
								> - Kwan
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">11/7</span> — Feminist ethics & AI
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Le Guin and I, Robot chapters (Canvas)</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 12</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">11/12</span> — Feminist ethics & AI II</div>
					<div>
						<span class="text-gray-500">11/14</span> — Science fiction & computing
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Post 2-3 minute sci-fi video clip related to computing/professionalism</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 13</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">11/19</span> — Intellectual property</div>
					<div>
						<span class="text-gray-500">11/21</span> — Ethics & machine learning
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://medium.com/@cfiesler/tech-ethics-curricula-a-collection-of-syllabi-3eedfb76be18"
									target="_blank"
									class="text-accent hover:underline">Over 200 Tech Ethics Curricula</a
								> - Fiesler
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Weeks 14-15</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">11/26-12/3</span> —
						<span class="font-medium text-highlight">Summing up & Term Paper Presentations</span>
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Assignment 4 (presentations) due</li>
							<li>Term Paper due</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Key Readings -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Key Readings & Resources</h2>

		<div class="space-y-6">
			<div>
				<h3 class="font-medium text-gray-900 mb-2">Case Studies & Ethics</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="http://sunnyday.mit.edu/papers/therac.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Medical Devices: The Therac-25</a
						> - Leveson
					</li>
					<li>
						<a
							href="http://www.nytimes.com/2010/01/24/health/24radiation.html"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Radiation Offers New Cures, and Ways to Do Harm</a
						> - NY Times
					</li>
					<li>
						<a
							href="https://cacm.acm.org/magazines/2018/1/223896-acm-code-of-ethics/fulltext"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">ACM Code of Ethics 2018</a
						>
					</li>
					<li>Quinn, Ethics for the Information Age - Chapters 2, 5, 6, 9</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Ethical Frameworks (Videos)</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://www.youtube.com/watch?v=kBdfcR-8hEY&t=1590s"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">The Moral Side of Murder</a
						> - Michael Sandel (start at 24:35)
					</li>
					<li>
						<a
							href="https://www.youtube.com/watch?v=MuiazbyOSqQ"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">The Good Citizen</a
						> - Michael Sandel (start at 18:00)
					</li>
					<li>
						<a
							href="http://people.morrisville.edu/~galuskwj/oneill.html"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Kant's Ethics Simplified</a
						>
					</li>
					<li>
						<a
							href="https://plato.stanford.edu/entries/ethics-virtue/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Virtue Ethics</a
						> - Stanford Encyclopedia
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Predictive Policing & Algorithms</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://www.nytimes.com/2018/05/26/us/chicago-police-surveillance.html"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline"
							>Can 30,000 Cameras Help Solve Chicago's Crime Problem?</a
						> - NY Times
					</li>
					<li>
						<a
							href="https://injusticetoday.com/setting-the-record-straight-on-predictive-policing-and-race-fe588b457ca2"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline"
							>Setting the Record Straight on Predictive Policing</a
						> - HRDAG
					</li>
					<li>
						<a
							href="https://www.bloomberg.com/news/features/2017-07-10/the-ex-cop-at-the-center-of-controversy-over-crime-prediction-tech"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Crime Prediction Technology</a
						> - Bloomberg
					</li>
					<li>
						<a
							href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.670.4346&rep=rep1&type=pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">The Relevance of Algorithms</a
						> - Gillespie
					</li>
					<li>
						<a
							href="https://www.cc.gatech.edu/~beki/cs4001/Winner.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Do Artifacts Have Politics?</a
						> - Winner
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Big Data & Privacy</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://www.youtube.com/watch?v=gdCJYsKlX_Y"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Weapons of Math Destruction</a
						> - Cathy O'Neil (Video)
					</li>
					<li>
						<a
							href="https://people.cs.kuleuven.be/~bettina.berendt/teaching/ViennaDH15/boyd_crawford_2012.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Critical Questions for Big Data</a
						> - Boyd & Crawford
					</li>
					<li>
						<a
							href="https://ijoc.org/index.php/ijoc/article/viewFile/2160/1160"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline"
							>Lost in Translation: Problems of Large-Scale Data Sets</a
						> - Busch
					</li>
					<li>
						<a
							href="http://meipokwan.org/Paper/SCG_2008.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">From Oral Histories to Visual Narratives</a
						> - Kwan
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Visual Argumentation</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://www.ted.com/talks/giorgia_lupi_how_we_can_find_ourselves_in_data?language=en"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">How We Can Find Ourselves in Data</a
						> - Giorgia Lupi (TED Talk)
					</li>
					<li>
						<a
							href="https://wattenberger.com/blog/d3#intro"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Introduction to D3.js</a
						>
					</li>
					<li>
						<a
							href="https://github.com/ft-interactive/chart-doctor/tree/master/visual-vocabulary"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Visual Vocabulary</a
						>
					</li>
					<li>
						<a
							href="http://www.datavizcatalogue.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">DataVizCatalogue</a
						>
					</li>
					<li>
						<a
							href="https://depictdatastudio.com/charts/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Interactive Chart Chooser</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">AI, Sci-Fi & Ethics</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>I, Robot excerpts - Asimov (Canvas)</li>
					<li>Le Guin chapters (Canvas)</li>
					<li>
						<a
							href="http://journals.sagepub.com/doi/pdf/10.1177/0306312714535679"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Academic Urban Legends</a
						> - Rekdal
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Guest Speakers -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Guest Speakers</h2>
		<ul class="space-y-2 text-gray-600">
			<li>Ellen Zegura & Amanda Meng</li>
			<li>Amy Bruckman - Privacy & Government</li>
			<li>Elizabeth Lester (Equifax) - Intellectual Property</li>
		</ul>
	</div>

	<!-- Sample Materials -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Sample Materials</h2>
		<ul class="space-y-1 text-sm text-gray-600">
			<li>
				<a
					href="http://www.munmund.net/courses/spring2017/Sample_Exam.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Sample Midterm Exam</a
				>
			</li>
			<li>
				<a
					href="https://www.cc.gatech.edu/~asb/teaching/4001/fall2016/4001-term-paper-fall2014.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Sample Term Paper 1</a
				>
			</li>
			<li>
				<a
					href="https://ben-shapiro-xbre.squarespace.com/s/termPaper_2.docx"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Sample Term Paper 2</a
				> (shared with student permission)
			</li>
			<li>
				<a
					href="https://ben-shapiro-xbre.squarespace.com/s/termPaper_3.docx"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Sample Term Paper 3</a
				> (shared with student permission)
			</li>
		</ul>
	</div>

	<!-- External Resources -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">External Resources</h2>
		<ul class="space-y-1 text-sm text-gray-600">
			<li>
				<a
					href="https://medium.com/@cfiesler/tech-ethics-curricula-a-collection-of-syllabi-3eedfb76be18"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">200+ Tech Ethics Curricula</a
				> - Casey Fiesler
			</li>
			<li>
				<a
					href="http://www.sigcas.org/ethics"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Computer Ethics Links (SIGCAS)</a
				>
			</li>
			<li>
				<a
					href="https://www.media.mit.edu/courses/the-ethics-and-governance-of-artificial-intelligence/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">MIT Ethics & Governance of AI Course</a
				>
			</li>
			<li>
				<a
					href="http://www.apastyle.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">APA Style Guide</a
				>
			</li>
			<li>
				<a
					href="http://www.policylibrary.gatech.edu/student-affairs/academic-honor-code"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Georgia Tech Honor Code</a
				>
			</li>
		</ul>
	</div>

	<!-- Acknowledgements -->
	<div class="mt-10 pt-8 border-t border-gray-200">
		<h2 class="text-lg font-semibold text-gray-900 mb-3">Acknowledgements</h2>
		<p class="text-sm text-gray-600 leading-relaxed">
			Course materials developed with contributions from Amy Bruckman, Munmun De Choudhury, Sauvik
			Das, Kayla DesPortes, Michael Sandel, David Owens, Rogers Hall, and Andy Hostetler.
		</p>
	</div>
</div>
