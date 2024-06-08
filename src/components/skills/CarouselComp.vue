<template>
    <section class="pt-1 pb-4">
        <h2 class="text-center text-2xl mb-2 font-inter-normal leading-8 "
            :class="{ 'text-dark2': !isDark, 'text-light2': isDark }">
            Languages</h2>
        <p class=" hidden md:block text-center text-lg font-inter-normal leading-8"
            :class="{ 'text-dark1': !isDark, 'text-light1': isDark }">
            I'm proficient in these languages, each one a versatile tool in its own right.
        </p>

        <div
            class="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                <!-- Ensure that the images cover entire screen width for a smooth transition -->
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fpython.png?alt=media&token=d8df01c3-c2c6-471a-82a9-32c4262db794"
                    alt="Python" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fjs.png?alt=media&token=7c26765f-5a36-4110-a0b1-de907c4fde01"
                    alt="JS" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fdart.png?alt=media&token=66e79e03-4d87-4398-b43f-6c01367391f7"
                    alt="Dart" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fts.png?alt=media&token=e36fd54b-c1e4-4fad-8f05-83ae8bde4245"
                    alt="TS" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FGoalng.png?alt=media&token=db591940-f84b-4405-b678-6c85a21d5d48"
                    alt="Goalang" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fdart.png?alt=media&token=66e79e03-4d87-4398-b43f-6c01367391f7"
                    alt="Dart" />
            </div>

            <!-- Duplicate of the above for infinite effect (you can use javascript to duplicate this too) -->
            <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                <!-- Ensure that the images cover entire screen width for a smooth transition -->
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fpython.png?alt=media&token=d8df01c3-c2c6-471a-82a9-32c4262db794"
                    alt="Python" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fjs.png?alt=media&token=7c26765f-5a36-4110-a0b1-de907c4fde01"
                    alt="JS" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fdart.png?alt=media&token=66e79e03-4d87-4398-b43f-6c01367391f7"
                    alt="Dart" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fts.png?alt=media&token=e36fd54b-c1e4-4fad-8f05-83ae8bde4245"
                    alt="TS" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FGoalng.png?alt=media&token=db591940-f84b-4405-b678-6c85a21d5d48"
                    alt="Goalang" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Fdart.png?alt=media&token=66e79e03-4d87-4398-b43f-6c01367391f7"
                    alt="Dart" />
            </div>
        </div>
    </section>
    <section class="pt-1 pb-4">
        <h2 class="text-center text-2xl mb-2 font-inter-normal leading-8 "
            :class="{ 'text-dark2': !isDark, 'text-light2': isDark }">
            Frameworks</h2>
        <p class=" hidden md:block text-center text-lg font-inter-normal leading-8 "
            :class="{ 'text-dark1': !isDark, 'text-light1': isDark }">My expertise extends to these frameworks, each one
            finely crafted to streamline development.</p>
        <div
            class="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                <!-- Ensure that the images cover entire screen width for a smooth transition -->
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FNode.png?alt=media&token=c427c06e-ca99-4f98-8d34-70e24394da2e"
                    alt="NodeJS" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FDjango.png?alt=media&token=0a9f967f-18cc-4db1-a896-2fdad44081ea"
                    alt="Django" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FReact.png?alt=media&token=c792eed8-e2a5-4f54-b2fd-24cbc95d94ee"
                    alt="React" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FVue.png?alt=media&token=d8403b2d-7c27-4066-a6bd-69b8b69e877a"
                    alt="Vue" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FArduino.png?alt=media&token=1ce34bdb-d9b9-420e-89f3-9c11c3ba571d"
                    alt="Arduino" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FReact.png?alt=media&token=c792eed8-e2a5-4f54-b2fd-24cbc95d94ee"
                    alt="React" />
            </div>

            <!-- Duplicate of the above for infinite effect (you can use javascript to duplicate this too) -->
            <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                <!-- Ensure that the images cover entire screen width for a smooth transition -->
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FNode.png?alt=media&token=c427c06e-ca99-4f98-8d34-70e24394da2e"
                    alt="NodeJS" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FDjango.png?alt=media&token=0a9f967f-18cc-4db1-a896-2fdad44081ea"
                    alt="Django" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FReact.png?alt=media&token=c792eed8-e2a5-4f54-b2fd-24cbc95d94ee"
                    alt="React" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FReact.png?alt=media&token=c792eed8-e2a5-4f54-b2fd-24cbc95d94ee"
                    alt="React" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FVue.png?alt=media&token=d8403b2d-7c27-4066-a6bd-69b8b69e877a"
                    alt="Vue" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FArduino.png?alt=media&token=1ce34bdb-d9b9-420e-89f3-9c11c3ba571d"
                    alt="Arduino" />
            </div>
        </div>
    </section>
    <section class="pt-1 pb-4">
        <h2 class="text-center text-2xl mb-2 font-inter-normal leading-8 "
            :class="{ 'text-dark2': !isDark, 'text-light2': isDark }">
            Tools</h2>
        <p class="hidden md:block text-center text-lg font-inter-normal leading-8 "
            :class="{ 'text-dark1': !isDark, 'text-light1': isDark }">I'm adept with these tools, each one a cornerstone
            in optimizing workflow and efficiency.</p>
        <div
            class="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                <!-- Ensure that the images cover entire screen width for a smooth transition -->
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FAWS.png?alt=media&token=9d57ecdc-bf39-4c56-a171-3eb202a48e53"
                    alt="AWS" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FDocker.png?alt=media&token=6934e952-d08c-4153-9186-99bcd1462b78"
                    alt="Docker" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Ffigma.png?alt=media&token=55ae6a54-b2ed-494f-8b25-e67ded742560"
                    alt="Figma" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FPowerBI.png?alt=media&token=7467a894-fd63-4963-b88c-7753397bf410"
                    alt="Power BI" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FPostgres.png?alt=media&token=c18fd7cb-5455-461b-a251-107e0456f1e5"
                    alt="Postgres" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FMongoDB.png?alt=media&token=b476aa42-b1af-4144-9511-dacb38e513ce"
                    alt="Mongo" />

            </div>

            <!-- Duplicate of the above for infinite effect (you can use javascript to duplicate this too) -->
            <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                <!-- Ensure that the images cover entire screen width for a smooth transition -->
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FAWS.png?alt=media&token=9d57ecdc-bf39-4c56-a171-3eb202a48e53"
                    alt="AWS" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FDocker.png?alt=media&token=6934e952-d08c-4153-9186-99bcd1462b78"
                    alt="Docker" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2Ffigma.png?alt=media&token=55ae6a54-b2ed-494f-8b25-e67ded742560"
                    alt="Figma" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FPowerBI.png?alt=media&token=7467a894-fd63-4963-b88c-7753397bf410"
                    alt="Power BI" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FPostgres.png?alt=media&token=c18fd7cb-5455-461b-a251-107e0456f1e5"
                    alt="Postgres" />
                <img class="mx-4 inline h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/skills%2FMongoDB.png?alt=media&token=b476aa42-b1af-4144-9511-dacb38e513ce"
                    alt="Mongo" />
            </div>
        </div>
    </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const isDark = computed(() => {
            return store.getters.getTheme === 'dark'
        })
        return {
            isDark
        }
    },
}
</script>