import { Mail, MessageCircle, Share2, Camera, Globe, Phone, Send, Rss, AtSign, Video, Music } from 'lucide-react'

// lucide-react ne fournit plus d'icônes de marques (Facebook, Instagram,
// LinkedIn…) dans cette version — on propose donc un jeu d'icônes
// génériques que l'administrateur associe librement à chaque lien.
export const socialIconMap = {
  Mail,
  MessageCircle,
  Share2,
  Camera,
  Globe,
  Phone,
  Send,
  Rss,
  AtSign,
  Video,
  Music,
}

export const socialIconOptions = Object.keys(socialIconMap)
