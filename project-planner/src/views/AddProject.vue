<template>
    <div>
        <h1 class="my-3">Add New Project</h1>
        <div class="card mb-3 shadow-sm border-0">
            <div class="card-body bg-light">
                <form>
                    <div class="mb-3">
                        <label for="title" class="form-label">Project Title</label>
                        <input type="text" class="form-control" id="title" aria-describedby="titleHelp">
                    </div>
                    <div class="mb-3">
                        <label for="detail" class="form-label">Detail</label>
                        <input type="text" class="form-control" id="detail">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>