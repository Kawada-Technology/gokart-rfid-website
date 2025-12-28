export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            blog_posts: {
                Row: {
                    category: string
                    content: string
                    cover_image: string | null
                    created_at: string
                    excerpt: string | null
                    id: string
                    published_at: string | null
                    slug: string
                    status: string
                    tags: string[] | null
                    title: string
                    updated_at: string
                    views_count: number
                }
                Insert: {
                    category: string
                    content: string
                    cover_image?: string | null
                    created_at?: string
                    excerpt?: string | null
                    id?: string
                    published_at?: string | null
                    slug: string
                    status?: string
                    tags?: string[] | null
                    title: string
                    updated_at?: string
                    views_count?: number
                }
                Update: {
                    category?: string
                    content?: string
                    cover_image?: string | null
                    created_at?: string
                    excerpt?: string | null
                    id?: string
                    published_at?: string | null
                    slug?: string
                    status?: string
                    tags?: string[] | null
                    title?: string
                    updated_at?: string
                    views_count?: number
                }
                Relationships: []
            }
            karts: {
                Row: {
                    color: string | null
                    created_at: string
                    id: string
                    name: string | null
                    status: string
                    tag_id: string
                    updated_at: string
                }
                Insert: {
                    color?: string | null
                    created_at?: string
                    id?: string
                    name?: string | null
                    status?: string
                    tag_id: string
                    updated_at?: string
                }
                Update: {
                    color?: string | null
                    created_at?: string
                    id?: string
                    name?: string | null
                    status?: string
                    tag_id?: string
                    updated_at?: string
                }
                Relationships: []
            }
            laps: {
                Row: {
                    id: string
                    kart_id: string
                    lap_number: number
                    lap_time: number
                    session_id: string | null
                    timestamp: string
                }
                Insert: {
                    id?: string
                    kart_id: string
                    lap_number: number
                    lap_time: number
                    session_id?: string | null
                    timestamp?: string
                }
                Update: {
                    id?: string
                    kart_id?: string
                    lap_number?: number
                    lap_time?: number
                    session_id?: string | null
                    timestamp?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "laps_kart_id_fkey"
                        columns: ["kart_id"]
                        referencedRelation: "karts"
                        referencedColumns: ["id"]
                    }
                ]
            }
            seo_config: {
                Row: {
                    description: string
                    id: string
                    keywords: string | null
                    og_image_url: string | null
                    page: string
                    title: string
                    updated_at: string
                }
                Insert: {
                    description: string
                    id?: string
                    keywords?: string | null
                    og_image_url?: string | null
                    page: string
                    title: string
                    updated_at?: string
                }
                Update: {
                    description?: string
                    id?: string
                    keywords?: string | null
                    og_image_url?: string | null
                    page?: string
                    title?: string
                    updated_at?: string
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
