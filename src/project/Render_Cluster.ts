import { v6 as uuidv6 } from 'uuid';
import * as fs from 'fs'
import * as path from 'path'
import { Task, Job, CreateDefaultJob, JobCategory, JobType, CreateDefaultTask, Project, Database } from 'verteilen-core';
import { GetBlenderProject_Database } from '../database/Blender';

const Cluster = ():Task => {
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.JAVASCRIPT,
        script: fs.readFileSync(path.join(__dirname, "..", "js", "ClusterCount.js")).toString(),
        string_args: [""],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Cluster Render",
        jobs: [
            render
        ]
    }
    return t
}

const Render = ():Task => {
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.COMMAND,
        string_args: ["", "blender", "-b %project% -E %engine% -f %_f% -F %format% -t %thread% --log-level %log% -o %output%"],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Cluster Render",
        cronjob: true,
        cronjobKey: "cluster",
        properties: [
            {
                name: "_f",
                expression: "ck + start"
            }
        ],
        jobs: [
            render
        ]
    }
    return t
}

export const GetBlenderClusterTemplate = (r:Project):Project => {
    const para:Database = {
        title: "Blender Database",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetBlenderProject_Database()
    }
    r.database = para
    r.tasks = [
        Cluster(),
        Render(),
    ]
    return r
}