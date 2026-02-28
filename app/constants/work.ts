import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2025',
    title: 'UIT',
    subtitle: 'Computer Science & Engineering',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'Nizhal Trust',
    subtitle: 'Web Developer Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'Red Team',
    subtitle: 'Cybersecurity Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: '?',
    subtitle: '???',
    position: 'left',
  },
  // {
  //   point: new THREE.Vector3(1, 1, -12),
  //   year: new Date().toLocaleDateString('default', { year: 'numeric' }),
  //   title: '?',
  //   subtitle: '???',
  //   position: 'right',
  // }
]