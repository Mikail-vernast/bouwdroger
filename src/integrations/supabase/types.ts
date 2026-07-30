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
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      bookings: {
        Row: {
          address: string
          booking_number: string
          city: string | null
          company_name: string | null
          created_at: string
          customer_type: string
          duration_days: number | null
          email: string
          equipment_drogers: number | null
          equipment_ventilatoren: number | null
          equipment_verwarming: number | null
          first_name: string
          id: string
          last_name: string
          notes: string | null
          package_tier: string | null
          phone: string
          postal_code: string | null
          product_id: string | null
          rental_end_date: string | null
          rental_start_date: string | null
          room_type: string | null
          sqm: number | null
          status: string
          total_price: number | null
          updated_at: string
          user_id: string | null
          vat_number: string | null
        }
        Insert: {
          address: string
          booking_number: string
          city?: string | null
          company_name?: string | null
          created_at?: string
          customer_type?: string
          duration_days?: number | null
          email: string
          equipment_drogers?: number | null
          equipment_ventilatoren?: number | null
          equipment_verwarming?: number | null
          first_name: string
          id?: string
          last_name: string
          notes?: string | null
          package_tier?: string | null
          phone: string
          postal_code?: string | null
          product_id?: string | null
          rental_end_date?: string | null
          rental_start_date?: string | null
          room_type?: string | null
          sqm?: number | null
          status?: string
          total_price?: number | null
          updated_at?: string
          user_id?: string | null
          vat_number?: string | null
        }
        Update: {
          address?: string
          booking_number?: string
          city?: string | null
          company_name?: string | null
          created_at?: string
          customer_type?: string
          duration_days?: number | null
          email?: string
          equipment_drogers?: number | null
          equipment_ventilatoren?: number | null
          equipment_verwarming?: number | null
          first_name?: string
          id?: string
          last_name?: string
          notes?: string | null
          package_tier?: string | null
          phone?: string
          postal_code?: string | null
          product_id?: string | null
          rental_end_date?: string | null
          rental_start_date?: string | null
          room_type?: string | null
          sqm?: number | null
          status?: string
          total_price?: number | null
          updated_at?: string
          user_id?: string | null
          vat_number?: string | null
        }
        Relationships: []
      }
      reserveringen: {
        Row: {
          achternaam: string
          adres: string
          bericht: string | null
          created_at: string
          duur: string
          email: string
          gemeente: string
          id: string
          leveringsdatum: string
          machine: string
          postcode: string
          prijs_excl_btw: number | null
          situatie: string
          telefoon: string
          voornaam: string
        }
        Insert: {
          achternaam: string
          adres: string
          bericht?: string | null
          created_at?: string
          duur: string
          email: string
          gemeente: string
          id?: string
          leveringsdatum: string
          machine: string
          postcode: string
          prijs_excl_btw?: number | null
          situatie: string
          telefoon: string
          voornaam: string
        }
        Update: {
          achternaam?: string
          adres?: string
          bericht?: string | null
          created_at?: string
          duur?: string
          email?: string
          gemeente?: string
          id?: string
          leveringsdatum?: string
          machine?: string
          postcode?: string
          prijs_excl_btw?: number | null
          situatie?: string
          telefoon?: string
          voornaam?: string
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
    Enums: {},
  },
} as const
