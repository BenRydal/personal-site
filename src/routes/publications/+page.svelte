<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';

	interface Publication {
		authors: string;
		year: number;
		title: string;
		venue: string;
		link?: string;
		award?: string;
	}

	const categories: { name: string; publications: Publication[] }[] = [
		{
			name: 'Select Publications',
			publications: [
				{
					authors: 'Shapiro, B.R., Silvis, D., & Hall, R.',
					year: 2025,
					title:
						'Visualization as Theory and Experience: Interactive Qualitative Data Visualization for the Learning Sciences',
					venue: 'Journal of the Learning Sciences',
					link: 'https://doi.org/10.1080/10508406.2025.2537945'
				},
				{
					authors: 'Shapiro, B.R., Horn, I.S., Gilliam, S., & Garner, B.',
					year: 2024,
					title:
						'Situating Teacher Movement, Space, and Relationships to Pedagogy: A Visual Method and Framework',
					venue: 'Educational Researcher, 53(6), 335-347',
					link: 'https://www.researchgate.net/publication/379577791_Situating_Teacher_Movement_Space_and_Relationships_to_Pedagogy_A_Visual_Method_and_Framework'
				},
				{
					authors: 'Shapiro, B.R., Hall, R., Mathur, A. & Zhao, E.',
					year: 2025,
					title:
						'Exploratory Visual Analysis of Transcripts for Interaction Analysis in Human-Computer Interaction',
					venue:
						"CHI Conference on Human Factors in Computing Systems (CHI '25), Yokohama, Japan. ACM, 17 pages",
					link: 'https://dl.acm.org/doi/10.1145/3706598.3713490'
				},
				{
					authors: 'Shapiro, B.R., Metts, E., & Zhao, E.',
					year: 2025,
					title:
						"The Interaction Geography Slicer: Designing Exploratory Spatial Data Visualization Tools for Teachers' Reflective Practice",
					venue:
						"CHI Conference on Human Factors in Computing Systems (CHI '25), Yokohama, Japan. ACM, 17 pages",
					link: 'https://dl.acm.org/doi/full/10.1145/3706598.3713499'
				},
				{
					authors:
						"Shapiro, B.R., Meng, A., O'Donnell, C., Lou, C., Zhao, E., Dankwa, B., & Hostetler, A.",
					year: 2020,
					title: 'Re-Shape: A Method to Teach Data Ethics for Data Science Education',
					venue:
						"Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (CHI '20). ACM, Honolulu, HI, USA, Paper 124",
					link: 'https://www.researchgate.net/publication/338789145_Re-Shape_A_Method_to_Teach_Data_Ethics_for_Data_Science_Education'
				}
			]
		},
		{
			name: 'Learning Sciences',
			publications: [
				{
					authors: 'Shapiro, B.R., Horn, I.S., Gilliam, S., & Garner, B.',
					year: 2024,
					title:
						'Situating Teacher Movement, Space, and Relationships to Pedagogy: A Visual Method and Framework',
					venue: 'Educational Researcher, 53(6), 335-347',
					link: 'https://www.researchgate.net/publication/379577791_Situating_Teacher_Movement_Space_and_Relationships_to_Pedagogy_A_Visual_Method_and_Framework'
				},
				{
					authors: 'Shapiro, B.R., & Silvis, D.',
					year: 2023,
					title:
						'Animated Movements, Animating Methods: An Interaction Geography Approach to Space and Affect in Early Childhood Education',
					venue: 'Journal of Early Childhood Literacy',
					link: 'https://www.researchgate.net/publication/375535759_Animated_movements_animating_methods_An_interaction_geography_approach_to_space_and_affect_in_early_childhood_education'
				},
				{
					authors:
						'Berson, I.R., Berson, M.J., McKinnon, C., Aradhya, D., Alyaeesh, M., Luo, W., & Shapiro, B.R.',
					year: 2023,
					title:
						"An exploration of robot programming as a foundation for spatial reasoning and computational thinking in preschoolers' guided play",
					venue: 'Early Childhood Research Quarterly, 65, 57-67',
					link: 'https://www.sciencedirect.com/science/article/abs/pii/S0885200623000777'
				},
				{
					authors:
						'Shapiro, B.R., Meng, A., Rothschild, A., Gilliam, S., Garrett, C., DiSalvo, C., & DiSalvo, B.',
					year: 2022,
					title:
						'"Bettering Data": The Role of Everyday Language and Visualization in Critical Novice Data Work',
					venue: 'Journal of Education, Technology & Society, 25(4), 109-125',
					link: 'https://drive.google.com/file/d/1gWUpUSR472PncKKMseQyJ8h3oZMU9ibD/view'
				},
				{
					authors: 'Shapiro, B.R., & Garner, B.',
					year: 2021,
					title:
						'Classroom Interaction Geography: Visualizing Space & Time in Classroom Interaction',
					venue: 'Journal of Research on Technology in Education, 54(5), 769-783',
					link: 'https://www.researchgate.net/profile/Ben-Shapiro-2/publication/352695612_Classroom_interaction_geography_visualizing_space_time_in_classroom_interaction/links/60da16d6a6fdccb745f09180/Classroom-interaction-geography-visualizing-space-time-in-classroom-interaction.pdf'
				},
				{
					authors: 'Marin, A., Headrick-Taylor, K., Shapiro, B.R., & Hall, R.',
					year: 2020,
					title:
						'Why Learning on the Move: Intersecting Research Pathways for Mobility, Learning and Teaching',
					venue: 'Cognition and Instruction, 38(3), 265-280',
					link: 'https://www.tandfonline.com/doi/full/10.1080/07370008.2020.1769100'
				},
				{
					authors:
						'Hall, R., Shapiro, B.R., Hostetler, A., Collins, H., Owens, D., Daw, C., & Fisher, D.',
					year: 2020,
					title: 'Here and then: Learning by making places with digital spatial story lines',
					venue: 'Cognition & Instruction, 38(3), 348-373',
					link: 'https://www.tandfonline.com/doi/abs/10.1080/07370008.2020.1732391'
				}
			]
		},
		{
			name: 'HCI / Computing Education',
			publications: [
				{
					authors: 'Doore, S., Shapiro, B.R., & Zegura, E.',
					year: 2023,
					title:
						'Special Issue on Responsible Computing: Embedding Principles, Practices & Pedagogies',
					venue: 'EngageCSEdu, 2(2)',
					link: 'https://www.engage-csedu.org/Speciallssue-Responsible-Computing'
				},
				{
					authors: 'Zegura, C., Shapiro, B.R., MacDonald, R., Borenstein, J., & Zegura, E.',
					year: 2023,
					title:
						"'Moment to Moment': A Situated View of Teaching Ethics from the Perspective of Computing Ethics Teaching Assistants",
					venue:
						"CHI Conference on Human Factors in Computing Systems (CHI '23), Hamburg, Germany. ACM, 15 pages",
					link: 'https://dl.acm.org/doi/abs/10.1145/3544548.3581572'
				},
				{
					authors: 'MacDonald, R., Zegura, C., Shapiro, B.R., Borenstein, J., & Zegura, E.',
					year: 2023,
					title: 'Developing Community Support for Computing Ethics Teaching Assistants',
					venue:
						'54th ACM Technical Symposium on Computer Science Education (SIGCSE 2023), Toronto, ON, Canada. ACM, 7 pages',
					link: 'https://dl.acm.org/doi/pdf/10.1145/3545945.3569844'
				},
				{
					authors:
						'Rothschild, A., Meng, A., DiSalvo, C., Johnson, B., Shapiro, B.R., & DiSalvo, B.',
					year: 2022,
					title: 'Interrogating Data Work as a Community of Practice',
					venue: 'Proceedings of the ACM on Human-Computer Interaction, 6, Article 307',
					link: 'https://dl.acm.org/doi/abs/10.1145/3555198'
				},
				{
					authors:
						'Rothschild, A., Booker, J., Davoll, C., Hill, J., Ivey, V., DiSalvo, C., Shapiro, B.R., & DiSalvo, B.',
					year: 2022,
					title:
						'Towards fair and pro-social employment of digital pieceworkers for sourcing machine learning training data',
					venue:
						"CHI Conference on Human Factors in Computing Systems Extended Abstracts (CHI EA '22). ACM, Article 2, 1-9",
					link: 'https://dl.acm.org/doi/abs/10.1145/3491101.3516384'
				},
				{
					authors: 'Johnson, B., Shapiro, B.R., DiSalvo, B., Rothschild, A., & DiSalvo, C.',
					year: 2021,
					title: 'Exploring Approaches to Data Literacy Through a Critical Race Theory Perspective',
					venue:
						"Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI '21), Yokohama, Japan. ACM, 25 pages",
					link: 'https://dl.acm.org/doi/10.1145/3411764.3445141'
				},
				{
					authors: 'Shapiro, B.R., Lovegall, E., Meng, A., Borenstein, J., & Zegura, E.',
					year: 2021,
					title:
						'Using Role-Play to Scale the Integration of Ethics across the Computer Science Curriculum',
					venue:
						"The 52nd ACM Technical Symposium on Computer Science Education (SIGCSE'21), Virtual Event, USA. ACM, 7 pages",
					link: 'https://www.researchgate.net/publication/349839583_Using_Role-Play_to_Scale_the_Integration_of_Ethics_Across_the_Computer_Science_Curriculum'
				},
				{
					authors:
						"Shapiro, B.R., Meng, A., O'Donnell, C., Lou, C., Zhao, E., Dankwa, B., & Hostetler, A.",
					year: 2020,
					title: 'Re-Shape: A Method to Teach Data Ethics for Data Science Education',
					venue:
						"Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (CHI '20). ACM, Honolulu, HI, USA, Paper 124",
					link: 'https://www.researchgate.net/publication/338789145_Re-Shape_A_Method_to_Teach_Data_Ethics_for_Data_Science_Education'
				},
				{
					authors: 'Shapiro, B.R., & Hall, R.',
					year: 2018,
					title: 'Personal Curation in a Museum',
					venue: 'Proceedings of the ACM on Human-Computer Interaction, Vol. 2, CSCW, Article 158',
					link: 'https://www.researchgate.net/publication/328562352_Personal_Curation_in_a_Museum'
				},
				{
					authors: 'Solomon, A., Guzdial, M., DiSalvo, B., & Shapiro, B.R.',
					year: 2018,
					title: 'Applying a Gesture Taxonomy to Introductory Computing Concepts',
					venue:
						"Proceedings of the 2018 ACM Conference on International Computing Education Research (ICER '18). ACM, 250-257",
					link: 'https://www.researchgate.net/publication/326918322_Applying_a_Gesture_Taxonomy_to_Introductory_Computing_Concepts'
				}
			]
		},
		{
			name: 'Information Visualization',
			publications: [
				{
					authors: 'Shapiro, B.R., Hall, R., Mathur, A. & Zhao, E.',
					year: 2025,
					title:
						'Exploratory Visual Analysis of Transcripts for Interaction Analysis in Human-Computer Interaction',
					venue:
						"CHI Conference on Human Factors in Computing Systems (CHI '25), Yokohama, Japan. ACM, 17 pages",
					link: 'https://dl.acm.org/doi/10.1145/3706598.3713490'
				},
				{
					authors: 'Shapiro, B.R., Metts, E., & Zhao, E.',
					year: 2025,
					title:
						"The Interaction Geography Slicer: Designing Exploratory Spatial Data Visualization Tools for Teachers' Reflective Practice",
					venue:
						"CHI Conference on Human Factors in Computing Systems (CHI '25), Yokohama, Japan. ACM, 17 pages",
					link: 'https://dl.acm.org/doi/full/10.1145/3706598.3713499'
				},
				{
					authors: 'Shapiro, B.R., Hall, R., Mathur, A., & Zhao, E.',
					year: 2024,
					title: 'Turn Charts for Interaction Analysis: Visually Mapping the Conversation Floor',
					venue:
						'Proceedings of the 18th International Conference of the Learning Sciences (ICLS) 2024, pp. 43-50',
					link: 'https://repository.isls.org/bitstream/1/11121/1/ICLS2024_43-50.pdf'
				},
				{
					authors: 'Mathur, A. & Shapiro, B.R.',
					year: 2022,
					title: 'Interactive Transcription Techniques for Interaction Analysis',
					venue:
						'Proceedings of the 16th International Conference of the Learning Sciences (ICLS), pg. 19-26. Hiroshima, Japan',
					link: 'https://www.researchgate.net/publication/361066549_Interactive_Transcription_Techniques_for_Interaction_Analysis'
				},
				{
					authors: 'Shapiro, B.R.',
					year: 2019,
					title:
						'Integrative Visualization: Exploring Data Collected in Collaborative Learning Contexts',
					venue:
						'Proceedings of the 13th International Conference on Computer Supported Collaborative Learning (CSCL) 2019, Volume 1, pp. 184-191. Lyon, France',
					link: 'https://www.researchgate.net/profile/Ben-Shapiro-2/publication/333728005_Integrative_Visualization_Exploring_Data_Collected_in_Collaborative_Learning_Contexts/links/5d00fdcb92851c874c612702/Integrative-Visualization-Exploring-Data-Collected-in-Collaborative-Learning-Contexts.pdf'
				},
				{
					authors: 'Shapiro, B.R., & Pearman II, F.A.',
					year: 2017,
					title: 'Using the Interaction Geography Slicer to Visualize New York City Stop & Frisk',
					venue: "Proceedings of the IEEE VIS 2017 Arts Program, VISAP'17. Phoenix, AZ",
					link: 'https://visap.uic.edu/2017/materials/Shapiro-StopAndFrisk-visap147.pdf'
				},
				{
					authors: 'Shapiro, B.R.',
					year: 2017,
					title: 'Using Space Time Visualization in Learning Environment Design',
					venue:
						"Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems (CHI EA '17). ACM, Denver, CO, USA. 178-183",
					link: 'https://www.researchgate.net/publication/316611227_Using_Space_Time_Visualization_in_Learning_Environment_Design',
					award: '3rd Place, ACM CHI Student Research Competition'
				},
				{
					authors: 'Shapiro, B.R., & Hall, R.',
					year: 2017,
					title: 'Interaction Geography in a Museum',
					venue:
						"Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems (CHI EA '17). ACM, Denver, CO, USA. 2076-2083",
					link: 'https://www.researchgate.net/publication/316612054_Interaction_Geography_in_a_Museum'
				},
				{
					authors: 'Shapiro, B.R., & Hall, R.',
					year: 2017,
					title: 'Making Engagement Visible: The Use of Mondrian Transcripts in a Museum',
					venue:
						'Proceedings of the 12th International Conference for Computer Supported Collaborative Learning, Vol. 1, pp. 33-40. Philadelphia, PA',
					link: 'https://repository.isls.org/bitstream/1/285/1/8.pdf',
					award: 'Best Design Paper Award'
				},
				{
					authors: 'Shapiro, B.R., Hall, R., & Owens, D.',
					year: 2017,
					title: 'Developing & Using Interaction Geography in a Museum',
					venue:
						'International Journal of Computer-Supported Collaborative Learning, 12(4), 377-399',
					link: 'https://par.nsf.gov/servlets/purl/10074100'
				}
			]
		}
	];

	let activeCategory = $state(categories[0].name);
</script>

<svelte:head>
	<title>Publications | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Academic publications by Ben Rydal Shapiro in learning sciences, HCI, and data visualization."
	/>

	<!-- Structured Data for Publications -->
	{@html (() => {
		const allPubs = categories.flatMap((cat) => cat.publications);
		const uniquePubs = allPubs.filter(
			(pub, index, self) => index === self.findIndex((p) => p.title === pub.title)
		);
		return `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Publications by Ben Rydal Shapiro",
		"description": "Academic publications in learning sciences, HCI, and data visualization",
		"url": "https://benrydal.com/publications",
		"author": {
			"@type": "Person",
			"name": "Ben Rydal Shapiro",
			"url": "https://benrydal.com"
		},
		"mainEntity": {
			"@type": "ItemList",
			"numberOfItems": ${uniquePubs.length},
			"itemListElement": [
				${uniquePubs
					.map(
						(pub, index) => `{
					"@type": "ListItem",
					"position": ${index + 1},
					"item": {
						"@type": "ScholarlyArticle",
						"headline": "${pub.title.replace(/"/g, '\\"')}",
						"author": "${pub.authors.replace(/"/g, '\\"')}",
						"datePublished": "${pub.year}",
						"publisher": "${pub.venue.replace(/"/g, '\\"')}"${pub.link ? `,
						"url": "${pub.link}"` : ''}
					}
				}`
					)
					.join(',\n\t\t\t\t')}
			]
		}
	}
	</script>`;
	})()}
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<div class="max-w-3xl">
		<h1 class="text-4xl font-bold text-gray-900">Publications</h1>
		<p class="mt-4 text-lg text-gray-600">
			Research spanning learning sciences, human-computer interaction, computing education, and
			information visualization.
		</p>
	</div>

	<!-- Category Tabs -->
	<div class="mt-10 border-b border-gray-200">
		<nav class="flex gap-8 overflow-x-auto" aria-label="Publication categories">
			{#each categories as category}
				<button
					onclick={() => (activeCategory = category.name)}
					class="pb-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer {activeCategory ===
					category.name
						? 'border-gray-900 text-gray-900'
						: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
				>
					{category.name}
					<span class="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
						{category.publications.length}
					</span>
				</button>
			{/each}
		</nav>
	</div>

	<!-- Publications List -->
	<div class="mt-8 space-y-6">
		{#each categories as category}
			{#if activeCategory === category.name}
				{#each category.publications as pub}
					<article
						class="group p-6 bg-white border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all"
					>
						<div class="flex items-start justify-between gap-4">
							<div class="flex-1">
								<p class="text-sm text-gray-500">
									{pub.authors} ({pub.year})
								</p>
								<h3 class="mt-1 text-lg font-medium text-gray-900 group-hover:text-gray-700">
									{pub.title}
								</h3>
								<p class="mt-2 text-gray-600 italic">
									{pub.venue}
								</p>
								{#if pub.award}
									<p class="mt-2 text-sm text-amber-700 font-medium">
										{pub.award}
									</p>
								{/if}
							</div>
							{#if pub.link}
								<a
									href={pub.link}
									class="shrink-0 inline-flex items-center px-3 py-1.5 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
									target="_blank"
									rel="noopener noreferrer"
								>
									PDF
									<ExternalLink class="ml-1 w-4 h-4" />
								</a>
							{/if}
						</div>
					</article>
				{/each}
			{/if}
		{/each}
	</div>
</div>
