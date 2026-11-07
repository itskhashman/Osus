"use client";

import { useTranslations } from "next-intl";
import type { Project } from "@/domain/project";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPageItems } from "@/rules/projects";

type ProjectReferencesTableProps = {
  rows: Project[];
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

const EMPTY = "—";

export default function ProjectReferencesTable({
  rows,
  page,
  pageCount,
  onPageChange,
}: ProjectReferencesTableProps) {
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col gap-6">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>{t("table.project")}</TableHead>
            <TableHead>{t("table.location")}</TableHead>
            <TableHead>{t("table.endUser")}</TableHead>
            <TableHead>{t("table.consultant")}</TableHead>
            <TableHead>{t("table.contractor")}</TableHead>
            <TableHead>{t("table.scope")}</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={6} className="py-10 text-center">
                {t("table.empty")}
              </TableCell>
            </TableRow>
          ) : (
            rows.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="min-w-56 font-semibold text-slate-900">
                  {project.name}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {project.location || EMPTY}
                </TableCell>
                <TableCell className="min-w-40">
                  {project.endUser || EMPTY}
                </TableCell>
                <TableCell className="min-w-40">
                  {project.consultant || EMPTY}
                </TableCell>
                <TableCell className="min-w-40">
                  {project.contractor || EMPTY}
                </TableCell>
                <TableCell className="min-w-48">
                  {project.scopes.join(" · ") || EMPTY}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {pageCount > 1 && (
        <Pagination aria-label={t("pagination.label")}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                aria-label={t("pagination.previous")}
              >
                {t("pagination.previous")}
              </PaginationPrevious>
            </PaginationItem>

            {getPageItems(page, pageCount).map((item, index) =>
              item === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis label={t("pagination.morePages")} />
                </PaginationItem>
              ) : (
                <PaginationItem key={item}>
                  <PaginationLink
                    isActive={item === page}
                    onClick={() => onPageChange(item)}
                    aria-label={t("pagination.page", { page: item })}
                  >
                    {item}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => onPageChange(page + 1)}
                disabled={page === pageCount}
                aria-label={t("pagination.next")}
              >
                {t("pagination.next")}
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
