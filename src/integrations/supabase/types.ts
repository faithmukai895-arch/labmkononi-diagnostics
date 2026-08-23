export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      contact_messages: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          message: string
          phone: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          message: string
          phone?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string
          phone?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      corporate_quotes: {
        Row: {
          company_name: string
          contact_person: string
          created_at: string
          email: string
          employees: string | null
          id: string
          location: string | null
          message: string | null
          phone: string
          services_needed: string | null
        }
        Insert: {
          company_name: string
          contact_person: string
          created_at?: string
          email: string
          employees?: string | null
          id?: string
          location?: string | null
          message?: string | null
          phone: string
          services_needed?: string | null
        }
        Update: {
          company_name?: string
          contact_person?: string
          created_at?: string
          email?: string
          employees?: string | null
          id?: string
          location?: string | null
          message?: string | null
          phone?: string
          services_needed?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          amount: number | null
          area: string | null
          collection_method: Database["public"]["Enums"]["collection_method"]
          created_at: string
          date_of_birth: string | null
          gender: string | null
          id: string
          items: Json
          location: string | null
          notes: string | null
          order_number: string
          patient_email: string | null
          patient_name: string
          patient_phone: string
          payment_method: string | null
          payment_status: Database["public"]["Enums"]["payment_status"]
          preferred_date: string | null
          preferred_time: string | null
          request_type: string | null
          status: Database["public"]["Enums"]["order_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          amount?: number | null
          area?: string | null
          collection_method?: Database["public"]["Enums"]["collection_method"]
          created_at?: string
          date_of_birth?: string | null
          gender?: string | null
          id?: string
          items?: Json
          location?: string | null
          notes?: string | null
          order_number?: string
          patient_email?: string | null
          patient_name: string
          patient_phone: string
          payment_method?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          preferred_date?: string | null
          preferred_time?: string | null
          request_type?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number | null
          area?: string | null
          collection_method?: Database["public"]["Enums"]["collection_method"]
          created_at?: string
          date_of_birth?: string | null
          gender?: string | null
          id?: string
          items?: Json
          location?: string | null
          notes?: string | null
          order_number?: string
          patient_email?: string | null
          patient_name?: string
          patient_phone?: string
          payment_method?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          preferred_date?: string | null
          preferred_time?: string | null
          request_type?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      partner_applications: {
        Row: {
          application_type: string
          business_type: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          license_number: string | null
          location: string | null
          message: string | null
          organization: string | null
          phone: string
          profession: string | null
        }
        Insert: {
          application_type?: string
          business_type?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          license_number?: string | null
          location?: string | null
          message?: string | null
          organization?: string | null
          phone: string
          profession?: string | null
        }
        Update: {
          application_type?: string
          business_type?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          license_number?: string | null
          location?: string | null
          message?: string | null
          organization?: string | null
          phone?: string
          profession?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          date_of_birth: string | null
          email: string | null
          full_name: string | null
          gender: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      results: {
        Row: {
          created_at: string
          id: string
          laboratory: string | null
          order_id: string | null
          report_status: string
          result_date: string | null
          storage_path: string | null
          test_name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          laboratory?: string | null
          order_id?: string | null
          report_status?: string
          result_date?: string | null
          storage_path?: string | null
          test_name: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          laboratory?: string | null
          order_id?: string | null
          report_status?: string
          result_date?: string | null
          storage_path?: string | null
          test_name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "results_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_staff: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role:
        | "super_admin"
        | "lab_admin"
        | "collection_staff"
        | "partner"
        | "health_professional"
        | "patient"
      collection_method: "home" | "workplace" | "partner_outlet"
      order_status:
        | "requested"
        | "confirmed"
        | "payment_pending"
        | "payment_completed"
        | "collection_scheduled"
        | "sample_collected"
        | "processing"
        | "result_available"
        | "completed"
        | "cancelled"
      payment_status: "pending" | "successful" | "failed" | "refunded"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "super_admin",
        "lab_admin",
        "collection_staff",
        "partner",
        "health_professional",
        "patient",
      ],
      collection_method: ["home", "workplace", "partner_outlet"],
      order_status: [
        "requested",
        "confirmed",
        "payment_pending",
        "payment_completed",
        "collection_scheduled",
        "sample_collected",
        "processing",
        "result_available",
        "completed",
        "cancelled",
      ],
      payment_status: ["pending", "successful", "failed", "refunded"],
    },
  },
} as const
