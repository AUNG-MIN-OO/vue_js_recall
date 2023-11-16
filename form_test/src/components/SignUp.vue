<template>
    <div class="container">
        <div class="card border-0 shadow-sm px-3 py-5">
            <div class="card-body">
                <form action="" @submit="submit">
                    <div class="mb-3">
                        <label for="email" class="mb-2 text-black-50 text-uppercase fs-6">Email</label>
                        <input type="email" v-model="email" class="form-control shadow-sm border-top-0 bg-light" id="email" autofocus required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="mb-2 text-black-50 text-uppercase fs-6">Password</label>
                        <input type="password" v-model="password" class="form-control shadow-sm border-top-0 bg-light" id="password" autofocus required>
                        <p class="text-danger small fw-bold" v-if="errMessage">{{errMessage}}</p>
                    </div>
                    <div class="mb-3">
                        <label for="role" class="mb-2 text-black-50 text-uppercase fs-6">Role</label>
                        <select v-model="role" class="form-select shadow-sm border-top-0 bg-light" id="role" required>
                            <option selected>Choose your role</option>
                            <option value="web">Web Developer</option>
                            <option value="android">Android Developer</option>
                            <option value="ios">IOS Developer</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="" class="mb-2 text-black-50 text-uppercase fs-6">Languages</label>
                        <div>
                            <input type="checkbox" value="php" v-model="languages" class="form-check-inline" id="php">
                            <label for="php" class="mb-2 text-black-50 text-uppercase fs-6 form-check-label">php</label>
                        </div>
                        <div>
                            <input type="checkbox" value="js" v-model="languages" class="form-check-inline" id="javascript">
                            <label for="javascript" class="mb-2 text-black-50 text-uppercase fs-6 form-check-label">javascript</label>
                        </div>
                        <div>
                            <input type="checkbox" value="java" v-model="languages" class="form-check-inline" id="java">
                            <label for="java" class="mb-2 text-black-50 text-uppercase fs-6 form-check-label">java</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="skills" class="mb-2 text-black-50 text-uppercase fs-6">skills</label>
                        <input type="text" @keyup="addSkills" v-model="skill" class="form-control shadow-sm border-top-0 bg-light" id="skills" required>
                    </div>
                    <div v-for="skill in skills" :key="skill" class="mb-3">
                        <p>{{skill}} <span class="cross" @click="deleteSkill(skill)">&#10008;</span></p>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary w-50">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        <p>{{email}}</p>
        <p>{{password}}</p>
        <p>{{role}}</p>
        <p>{{languages}}</p>
        <p>{{skills}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email : "example@gmail.com",
            password : "",
            role : "web",
            languages : [],
            skill : "",
            skills : [],
            errMessage : "",
        }
    },
    methods : {
        addSkills(e){
            if (e.key === "Enter" && this.skill){
                this.skills.push(this.skill);
                this.skill = "";
            }else {
                console.log(e.key)
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter(loopedSkill=>{
                return loopedSkill != skill;
            })
        },
        submit(e){
            e.preventDefault();
            if (this.password.length < 8){
                this.errMessage = "* Password must be at least 8 characters";
            }
            console.log("submitted");
        }
    }
}
</script>

<style scoped>

.card{
    max-width: 500px;
    margin: 0 auto;
}

input:focus{
    border-color: white;
}

select:focus{
    border-color: white;
}

.cross{
    cursor: pointer;
    color: red;
}

</style>