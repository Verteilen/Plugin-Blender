import { TemplateGroup_Database, TemplateGroup_Project } from 'verteilen-core'
import { GetBlenderProject_Database } from './database/Blender'
import { GetBlenderClusterTemplate } from './project/Render_Cluster'
import { GetBlenderSingleTemplate } from './project/Render_Single'

export const FFmpeg_ProjectTempGroup:Array<TemplateGroup_Project> = [
    { group: "Blender", title: "Single Render", filename: "single", value: 100, template: GetBlenderSingleTemplate },
    { group: "Blender", title: "Cluster Render", filename: "cluster", value: 101, template: GetBlenderClusterTemplate },
]

export const FFmpeg_DatabaseTempGroup:Array<TemplateGroup_Database> = [
    { group: "Blender", title: 'Blender Database', filename: "database", value: 0, template: GetBlenderProject_Database },
]